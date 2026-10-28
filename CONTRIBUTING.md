# Contributing to claude-plugins

For people and agents. Read this whole file before your first change here.
Shared ARC rules: [repo standard](https://github.com/arc-web/agent-config/blob/main/CONTRIBUTING.md#rules-for-every-arc-web-repo) and [STANDARD.md](https://github.com/arc-web/agent-config/blob/main/handbook/STANDARD.md).

## At a glance

| | |
|---|---|
| What this repo is | A plugin marketplace for Claude Code: five plugins (Composure, Sentinel, Testbench, Shipyard, Design Forge) with hooks, skills and reference docs |
| Owner and approver | Upstream plugin author (named in `.claude-plugin/plugin.json`) for the plugins; ARC admin (role) approves changes to this copy |
| Runs live at | Inside Claude Code on each user's machine. Nothing runs from this repo. |
| A merge reaches live by | Merging to `main`. Users get it with `claude plugin update <name>`. |
| Test command | No automated checks yet. Hook changes: the manual command in "Set up and test". |
| Plane project | ARC internal Plane workspace, project named on the task |

## Quick start for agents

1. Read the Plane task and its comments. No task, no change (ask a person to create one).
2. Claim the work so nobody else takes it.
3. Branch from the latest `main`: `<type>/<short-slug>`.
4. Make the smallest change that meets the task's acceptance.
5. Run the manual checks in "Set up and test" that match your change. Paste the results in the PR.
6. Open a PR with the template filled in. Link the Plane task.
7. After merge: users pick the change up with `claude plugin update <name>`.
8. Comment on the Plane task with the PR and what is left.

## Quick start for people

Ask an agent to make the change and to describe it in a PR. You get a branch and a PR to review.

## What belongs here

| Change | Home |
|---|---|
| Plugin code, hooks, skills, reference docs | this repo, `plugins/<name>/` |
| Use-case write-ups | this repo, `use-cases/` |
| Marketplace and plugin metadata | this repo, `.claude-plugin/` |
| Presentation page and plans | this repo, `docs/` (see the `.gitignore` note below) |

## Layout

- `plugins/`: the five plugins. Each has its own `hooks/`, `skills/` and reference docs.
- `use-cases/`: write-ups of real cases.
- `.claude-plugin/`: `marketplace.json` and `plugin.json`.
- `.claude/no-bandaids.json`: stack detection settings that the plugins read.
- `assets/`: images used by the README.
- `docs/`: the presentation page and a plan document.
- `.github/`: the PR template and one dormant workflow (see "Rules that are easy to break").

## Set up and test

There is no automated check. For a hook change, run this by hand from `plugins/composure/`:

```bash
echo '{"tool_name":"Write","tool_input":{"file_path":"test.xx","content":"x"}}' | bash hooks/no-bandaids.sh; echo "exit=$?"
```

This input is harmless and exits 0. To confirm the hook still blocks, send a `.ts` file that contains `as any`:

```bash
printf '%s' '{"tool_name":"Write","tool_input":{"file_path":"a.ts","content":"const x = y as any;\n"}}' | bash hooks/no-bandaids.sh; echo "exit=$?"
```

This input must print `BLOCKED` and exit 2.

## Making a change

- One task per PR.
- Fill in the PR template. Its checklists apply to the change type you pick.
- Keep README counts (plugins, skills, hooks) matching the plugin folders. Check the folders before you edit a count.

## Release and rollback

| Layer | Here |
|---|---|
| Dev | A branch in a local checkout |
| Test | Manual hook command above, for hook changes |
| Staging | None yet |
| Production | Merge to `main`. Users run `claude plugin update <name>`. |

To roll back, revert the merge commit on a new branch and open a PR. Users then run `claude plugin update <name>` again.

## Rules that are easy to break

- Hooks run on every Read, Edit and Write. A bad hook blocks users' work, so test hook changes before the PR.
- `.gitignore` lists `docs/`, but some docs files are tracked. New files under `docs/` do not show as changes by default. Check `git status` before you commit.
- `.github/workflows/notify-preview.yml` is dormant in this repo. On a push to `main` that changes `plugins/design-forge/`, it sends a dispatch to another repo using a repository secret. Do not enable Actions here or change that workflow without a review.
- The install commands in `README.md` name the upstream marketplace's GitHub account. Do not change them without checking the marketplace source in `.claude-plugin/marketplace.json`.

## Secrets

This repo stores no secret values. `plugins/sentinel/references/general/secret-patterns.md` lists key formats as examples. The dormant workflow names one repository secret, `PREVIEW_DISPATCH_TOKEN`. Only the name is recorded here.

## Getting help

Ask in the ARC internal Plane workspace, on the task for this repo.
