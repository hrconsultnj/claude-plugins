/**
 * enable-marketplace-autoupdate.ts — turn on autoUpdate for the composure-suite
 * marketplace in Claude Code's known_marketplaces.json so users get bumped
 * plugin.json versions delivered automatically at session start.
 *
 * Per docs (code.claude.com/docs/en/discover-plugins#configure-auto-updates):
 * third-party marketplaces have autoUpdate disabled by default. Without this
 * step, end users have to manually run `/plugin marketplace update` and
 * `/plugin update <plugin>` for every release. This helper closes that gap
 * at install time. The runtime self-heal lives in
 * plugins/composure/hooks/session/composure-freshness.sh.
 *
 * Codex (~/.codex/config.toml) already auto-pulls git-source marketplaces
 * (verified on this machine: composure-suite is at the latest commit SHA
 * without any explicit auto_update flag). If that default ever changes,
 * extend this helper with a Codex branch.
 *
 * Fail-open by design: any error logs a warning and returns false, never
 * throws. The install must keep moving even when the marketplace file is in
 * a state we don't recognize.
 */

import { readFile, writeFile, mkdir, rename } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { homedir } from "node:os";

import { logger } from "./logger.js";

const KNOWN_MARKETPLACES_PATH = join(homedir(), ".claude", "plugins", "known_marketplaces.json");
const MARKETPLACE_NAME = "composure-suite";

interface KnownMarketplaces {
  [name: string]: {
    source?: unknown;
    installLocation?: string;
    lastUpdated?: string;
    autoUpdate?: boolean;
    [k: string]: unknown;
  };
}

/**
 * Ensure composure-suite has autoUpdate: true in known_marketplaces.json.
 *
 * Returns:
 *   - "enabled"       — wrote autoUpdate=true (was absent or false)
 *   - "already-on"    — autoUpdate was already true; no-op
 *   - "no-marketplace" — known_marketplaces.json exists but no composure-suite entry yet (marketplace add hasn't run / failed)
 *   - "skipped"       — known_marketplaces.json missing entirely (Claude Code never ran)
 *   - "error"         — read/parse/write failed; warning logged
 */
export async function ensureComposureSuiteAutoUpdate(): Promise<
  "enabled" | "already-on" | "no-marketplace" | "skipped" | "error"
> {
  if (!existsSync(KNOWN_MARKETPLACES_PATH)) {
    return "skipped";
  }

  let raw: string;
  try {
    raw = await readFile(KNOWN_MARKETPLACES_PATH, "utf8");
  } catch (err) {
    logger.warn(`Could not read ${KNOWN_MARKETPLACES_PATH} — autoUpdate not enforced`);
    return "error";
  }

  let parsed: KnownMarketplaces;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    logger.warn(`${KNOWN_MARKETPLACES_PATH} is not valid JSON — autoUpdate not enforced`);
    return "error";
  }

  const entry = parsed[MARKETPLACE_NAME];
  if (!entry) {
    return "no-marketplace";
  }

  if (entry.autoUpdate === true) {
    return "already-on";
  }

  entry.autoUpdate = true;

  // Atomic write: temp file + rename. Avoids leaving a half-written JSON if
  // Claude Code or another process reads mid-write.
  const tmp = `${KNOWN_MARKETPLACES_PATH}.tmp.${process.pid}`;
  try {
    await mkdir(dirname(KNOWN_MARKETPLACES_PATH), { recursive: true });
    await writeFile(tmp, JSON.stringify(parsed, null, 2) + "\n", "utf8");
    await rename(tmp, KNOWN_MARKETPLACES_PATH);
  } catch (err) {
    logger.warn(`Could not write ${KNOWN_MARKETPLACES_PATH} — autoUpdate not enforced`);
    return "error";
  }

  return "enabled";
}
