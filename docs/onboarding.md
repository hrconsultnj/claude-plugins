# Onboarding

This takes you from nothing installed to your first checked project.

## 1. Check the requirements

In a new terminal, run:

```bash
node --version
command -v node
```

You need Node.js 22.5 or newer, and the second command must print a path. If you use Homebrew on an Apple Silicon Mac and nothing prints, Node may be installed but missing from your PATH. This adds it for new terminals:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
```

Open a new terminal afterwards.

## 2. Create an account

A first install stops until this machine is signed in, and the free tier counts. Sign up at [composure-pro.com/login](https://composure-pro.com/login).

If the installer in the next step still stops at signup, see [the open report on this step](https://github.com/hrconsultnj/claude-plugins/issues/23).

## 3. Install

```bash
pnpm dlx create-composure
```

`npx create-composure` also works, and `npx` comes with Node.js.

## 4. Check the install

Start a new Claude Code session and run:

```
/composure:health
```

In a folder you haven't set up, it's normal to see that the project isn't initialized and the code graph isn't built.

## 5. Set up a project

Open Claude Code in a project folder and run:

```
/composure:initialize
```

It detects your stack and creates the project's Composure config.

## 6. Get your first report

```
/composure:audit
```

This gives the project a scored health report.
