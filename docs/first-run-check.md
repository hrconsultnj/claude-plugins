# Checking your first run

After installing, start a new Claude Code session and run `/composure:health`.

These results are normal in a folder you haven't set up yet. Run `/composure:initialize` in a project to clear them:

- `project not initialized (no no-bandaids.json)`
- The code graph is `not built`

## Common problems

| What you see | Likely cause | What to do |
|---|---|---|
| `Install blocked: signup required` | No Composure account is signed in on this machine | Sign up at [composure-pro.com/login](https://composure-pro.com/login). See [the open report on this step](https://github.com/hrconsultnj/claude-plugins/issues/23) if the installer still stops |
| The `graph`, `cortex` or `enforce` servers fail to connect | `node` isn't on the PATH that Claude Code started with | Run `command -v node` in a new terminal. If it prints nothing, add Node to your shell profile, then restart Claude Code |
| `manifest.json could not be written — check ~/.composure/ permissions` | This also appears when `node` isn't on the PATH | Fix the PATH first, then start a new session |
| `Auth check inconclusive` at session start | [Open report](https://github.com/hrconsultnj/claude-plugins/issues/22) | Run `/composure:account status` to see whether you're signed in |
| `06-remediate` shows `compiled step failed internally` | [Open report](https://github.com/hrconsultnj/claude-plugins/issues/20) | The other health steps still report normally |

On Apple Silicon Macs that use Homebrew, this adds Node to the PATH for new terminals:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
```
