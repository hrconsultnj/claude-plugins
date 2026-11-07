# Composure in Hermes Agent

**Scenario**: Use Composure skills from [Hermes Agent](https://github.com/NousResearch/hermes-agent) as well as Claude Code and Codex
**Stack**: Any machine with Composure installed through `/composure:sync` and Hermes on the same machine
**Plugin feature**: Skill loader command line (`composure-fetch.mjs`), unchanged

---

## The Problem

Claude Code and Codex load Composure as a plugin. Hermes has no plugin system. It only reads a skills folder, so none of the 70 Composure skills showed up there.

## What We Did

Two small changes. Nothing in Composure was modified.

1. **Copy each skill's entry file into Hermes's skills folder.** Only `SKILL.md` is copied. The step files stay behind Composure's own loader, so account tiers and quota checks still apply and the steps never go stale.
2. **Put the plugin name in front of each skill name** (`composure-audit`, `sentinel-scan`, `design-forge-branding`). Plain names such as `audit`, `commit` and `stats` would clash with other Hermes skills. Hermes also already had a `social-media` skill that clashed with Design Forge's.
3. **Add one line under the frontmatter** telling Hermes to use the terminal loader instead of the MCP fetch tool. Every Composure skill already documents that command as its fallback. Hermes has no MCP fetch tool, so without the line it asks for a tool it cannot find.

## The Script

```python
import os, re, shutil, pathlib
home = pathlib.Path.home()
mp = home / ".composure/marketplace/plugins"
dest = home / ".hermes/skills/composure-suite"
if dest.exists():
    shutil.rmtree(dest)
n = 0
for plugin in sorted(os.listdir(mp)):
    sk = mp / plugin / "skills"
    if not sk.is_dir():
        continue
    for s in sorted(os.listdir(sk)):
        src = sk / s / "SKILL.md"
        if s.startswith("_") or not src.is_file():
            continue
        name = f"{plugin}-{s}"
        text = src.read_text()
        text, k = re.subn(r"(?m)^name:\s*.*$", f"name: {name}", text, count=1)
        assert k == 1, name
        note = ("\n> **Hermes:** there is no MCP fetch tool here. Load every step with the terminal: "
                f"`{home}/.composure/bin/composure-fetch.mjs skill {plugin} {s} <step-file-name-without-.md>`. "
                "It prints a file path; read that file and follow it. "
                "Ignore any instruction to use ToolSearch or the composure_fetch_skill tool.\n")
        text = re.sub(r"(?s)\A(---\n.*?\n---\n)", lambda m: m.group(1) + note, text, count=1)
        out = dest / name
        out.mkdir(parents=True)
        (out / "SKILL.md").write_text(text)
        n += 1
print(n, "skills written to", dest)
```

Run it again after `/composure:sync` pulls a new version, because the copy is a snapshot.

## How We Checked

- `hermes skills list` shows all 70 skills as enabled, grouped under `composure-suite`.
- `hermes -z "Using the composure-audit skill, fetch its first step (00-bootstrap) ... and quote the first line" --skills composure-audit` loaded the skill, ran the loader, and quoted "Step 0: Bootstrap". The loader reported `[bundled:encrypted] — using locally cached version`, so the text came from the local cache.
- Tested on macOS with the Hermes command line. Not tested on Linux, and not tested with a Hermes install on a different machine from Composure.

## Limits

- It is a snapshot, so it needs re-running after a Composure update.
- Hermes and Composure must be on the same machine, because the loader and its cache live under `~/.composure`.
- Hooks, the code graph server and the MCP tools are not wired into Hermes. Only the skills are.
