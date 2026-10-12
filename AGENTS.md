# Agent instructions: claude-plugins

Read [CONTRIBUTING.md](CONTRIBUTING.md) first.

Rules agents break most here:

1. Hooks run on every edit in users' sessions. Test a hook change by hand, as CONTRIBUTING.md shows, before the PR.
2. Do not enable GitHub Actions or change `.github/workflows/notify-preview.yml` to run.
3. Do not change the install commands or marketplace names in `README.md` without checking `.claude-plugin/marketplace.json`.
4. Check `git status` before committing: `.gitignore` lists `docs/`.
5. Changes go by PR to `main`. Never push to `main` directly.
