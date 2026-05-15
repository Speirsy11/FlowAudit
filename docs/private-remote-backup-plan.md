# Private Remote Backup Plan

> Local planning note only. This is not approval to create a repository, add a remote, push code, change visibility, enable GitHub features, publish pages, contact anyone, or collect real data.

This plan exists so a future private backup approval can be reviewed as a narrow, reversible infrastructure step rather than accidentally becoming a launch.

## Purpose

Back up the local SMB AI Workflow Audit Kit to a private remote for safekeeping and easier review, while preserving all current guardrails:

- no public release;
- no landing page;
- no outreach;
- no issue/discussion community launch;
- no payment, waitlist, scheduling, analytics, or lead capture;
- no real client data;
- no implementation work.

## Preconditions before requesting approval

Run and inspect:

```bash
cd /Users/charliespeirs/Developer/smb-ai-workflow-audit-kit
npm run check
git status --short --branch
git log --oneline -12
git grep -nE "(api[_-]?key|secret|token|password|passwd|bearer|sk-[A-Za-z0-9]|AKIA|private key|BEGIN .*PRIVATE|@|\+44|payment|bank account|sort code)" -- . ':!docs/public-safe-redaction-check.md' ':!docs/private-remote-backup-plan.md'
```

Expected grep result: guardrail/denylist language only. Any real secret, account detail, private URL, customer data, or contact detail blocks backup until removed.

## Approval request wording

Use wording like this if Charlie wants to approve it later:

> Approve creating a private GitHub remote for `/Users/charliespeirs/Developer/smb-ai-workflow-audit-kit` and pushing the current `master` branch for backup/review only. Do not make it public, publish pages, enable outreach, create payment/waitlist/forms, contact anyone, or use real client data.

## Exact action shape after approval

The exact commands depend on the approved repository URL. Do not run these without approval.

```bash
cd /Users/charliespeirs/Developer/smb-ai-workflow-audit-kit
git remote add origin <approved-private-repo-url>
git push -u origin master
```

## Non-goals

- Do not rename the repo for marketing.
- Do not add a public license decision unless separately approved.
- Do not enable GitHub Pages.
- Do not add public topics, releases, packages, actions, discussions, or issue templates as a launch motion.
- Do not post the repo link anywhere.
- Do not send the repo to any person or business.
- Do not create payment, scheduling, analytics, form, or waitlist infrastructure.

## Rollback / containment if a mistake happens

If a remote is accidentally created or pushed outside the approved scope:

1. Stop immediately; do not keep adding changes.
2. Make the remote private if it is not private already.
3. Remove public Pages/releases/packages/discussions/topics if any were enabled.
4. Record exactly what happened in the income-engine log.
5. Ask Charlie before deleting the remote or force-changing history.

## Success criteria

A successful private backup means only this:

- private remote exists at the approved URL;
- current local branch is pushed;
- repo remains private;
- no public features or external contacts are created;
- local and remote contain fictional/sample data only;
- `npm run check` still passes after backup.

## Current recommendation

Do not perform this step yet. First, Charlie should review `docs/review-packet.md`, `docs/public-safe-redaction-check.md`, and the completed fictional deliverables. If still useful, private backup is the lowest-risk externalization step to approve later.
