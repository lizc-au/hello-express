# Git & Versioning — Cheat Sheet (Liz)

> ### Conventions: I’ll always say which window to use.
> - **Use PS7 (WT)** for everyday dev (posh-git, tabs).
> - **Use PS7 SAFE** only if the shell/environment is misbehaving.

## 1) Daily flow (feature work)
#### Window: PS7 (WT)
```pwsh
git status
git pull --rebase
git checkout -b feature/<ticket-or-topic>
git add -A
git commit -m "feat: short summary"
git push -u origin HEAD
```

## 2) Branching rules

- feature/<topic> (e.g., feature/login-form)

- fix/<topic> (quick bugfix)

- chore/<topic> (deps, CI, tooling)

## 3) Commit style (Conventional-ish)

- Types: feat, fix, docs, chore, refactor, test

- Example: fix: handle empty env in config loader

## 4) Sync with main

#### Window: PS7 (WT)

```pwsh
git fetch origin
git checkout main
git pull --rebase
git checkout feature/<topic>
git rebase main
# resolve conflicts if any, then:
git push --force-with-lease
```

## 5) Squash tidy commits (before PR)

#### Window: PS7 (WT)

```pwsh
git rebase -i main
# mark extra commits as "squash" or "fixup"
```

## 6) Undo & recover (safest first)

#### Window: PS7 (WT)

```pwsh
# Unstage (keep file changes):
git restore --staged <file>

# Edit last commit message or include new changes:
git commit --amend

# Back out last commit but keep changes:
git reset --soft HEAD~1

# Throw away local changes in file (careful):
git restore --source=HEAD -- <file>
```

## 7) Stash (park WIP)

#### Window: PS7 (WT)

```pwsh
git stash push -m "wip: <topic>"
git stash list
git stash show -p stash@{0}
git stash pop stash@{0}
```

## 8) Cherry-pick (copy a commit)

#### Window: PS7 (WT)

```pwsh
git cherry-pick <commit-sha>
```

## 9) Release tags

#### Window: PS7 (WT)

```pwsh
# Annotated tag (preferred):
git tag -a v0.1.0 -m "v0.1.0"
git push origin v0.1.0
# List tags:
git tag --list
```

## 10) PR checklist (quick)

- Branch up to date with main (rebased)

- Commits tidy (squashed as needed)

- Tests pass locally

- Small, focused PR description

## 11) When to switch windows

- Stay in WT for all Git work by default.

- Switch to SAFE only if the prompt/modules act weird (diagnosis run), then return to WT.

> ## Notes for future additions:
> - **Fix merge conflicts** mini-guide
> - **Rebase** vs **merge** quick comparison
> - **Tag + GitHub Release** steps
>```makefile
>::contentReference[oaicite:0]{index=0}
>```



> _Automated blunt-force pass 
