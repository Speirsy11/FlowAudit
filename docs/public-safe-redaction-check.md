# Public-Safe / Private-Remote Preflight Check

> Local preflight only. This document is not approval to publish, push, create a remote, contact anyone, collect real data, create a waitlist/payment page, deploy anything, or run a live audit.

Use this before any future externalization decision for the SMB AI Workflow Audit Kit. The safest default remains: keep the kit local until Charlie explicitly approves exactly one next step.

## Current externalization status

- Repository status: local/private only.
- Remote status: no remote configured or pushed.
- Data status: fictional/sample data only.
- Public page status: no public landing page, form, calendar link, analytics, payment page, or waitlist.
- Contact status: no outreach, email, message, post, call, lead collection, or customer contact.
- Client-work status: no real audit, system access, deployment, implementation, or customer-message automation.

## File inventory for review

### Core overview

- `README.md` — productized audit overview, file map, guardrails, and future paid-offer shape.
- `CHANGELOG.md` — local change summary and current local/private status.
- `docs/review-packet.md` — local review order, deliverables, go/no-go criteria, and one-step approval choices.
- `docs/local-review-checklist.md` — package, privacy, offer-readiness, and approval checklist.
- `docs/private-remote-backup-plan.md` — private backup approval wording, non-goals, rollback/containment, and success criteria.

### Fictional sample deliverables

- `samples/fictional-intake.md` — fictional Northstar intake.
- `samples/fictional-discovery-notes.md` — fictional discovery notes.
- `samples/completed-audit-report.md` — fictional completed audit report.
- `samples/fictional-pilot-blueprint.md` — fictional draft-only pilot blueprint.
- `samples/fictional-acceptance-log.md` — fictional accept/edit/reject pilot evidence log.

### Templates

- `templates/scoring-rubric.md` — automation/risk scoring rubric.
- `templates/audit-report-template.md` — report structure.
- `templates/client-safe-intake-questionnaire.md` — safe intake template.
- `templates/pilot-blueprint-template.md` — draft-only pilot planning template.
- `templates/acceptance-scorecard.md` — pilot quality/safety scorecard.

### Offer validation docs

- `docs/service-one-pager.md` — local positioning one-pager.
- `docs/discovery-call-script.md` — approval-gated validation call script.
- `docs/offer-options.md` — internal draft package options, not a live price sheet.
- `docs/landing-page-draft.md` — public-safe copy draft for review only, not published.

## Sensitive-data check

Before any remote backup or public-safe prep, inspect the repository for:

- real person names beyond Charlie/Rocky attribution and fictional sample labels;
- real business names, customer names, phone numbers, email addresses, postal addresses, account IDs, URLs, private hostnames, tokens, API keys, credentials, bank/payment details, medical/legal/payroll/tax records, or customer exports;
- accidental notes that imply permission to contact people, publish pages, collect leads, create payment pages, access systems, or run implementation.

Suggested local checks:

```bash
cd /Users/charliespeirs/Developer/smb-ai-workflow-audit-kit
npm run check
git status --short --branch
git grep -nE "(api[_-]?key|secret|token|password|passwd|bearer|sk-[A-Za-z0-9]|AKIA|private key|BEGIN .*PRIVATE|@|\+44|payment|bank account|sort code)" -- . ':!docs/public-safe-redaction-check.md'
```

A grep match is not automatically a blocker; review context. For example, guardrail text saying "do not collect passwords" is expected. Any real secret, contact detail, account detail, or private URL is a blocker.

## Approval gates by path

### Path A — keep local

No external approval needed. Continue improving fictional/sample assets, validation checks, and review docs locally.

### Path B — private remote backup

Requires Charlie approval for:

1. repository host and visibility;
2. remote name/URL;
3. exact push command;
4. confirmation that no public discovery, stars, issues, pages, actions, package publishing, or outreach will be enabled as part of the backup.

Do not create the remote or push until approved.

### Path C — public-safe repo prep

Requires Charlie approval before any public push. Before approval, local prep may include:

- public-safe README wording;
- repository description draft;
- license decision draft;
- issue/PR templates;
- final redaction checklist.

Do not publish, push, enable GitHub Pages, create a landing page, or post links until approved.

### Path D — one validation conversation

Requires Charlie approval for:

1. named recipient/business;
2. exact message wording;
3. channel;
4. what may be asked;
5. what data must not be collected;
6. stop condition if the conversation turns into consulting, implementation, or system-access discussion.

Do not contact anyone until approved.

## Release-blocking findings

Block externalization if any of these are true:

- Any non-fictional business/customer/system/account data appears in the repo.
- Any secret, token, credential, private URL, customer export, or real contact detail appears in the repo.
- The landing page or offer copy implies guaranteed ROI, savings, revenue, compliance, or accuracy.
- Any document suggests automatic customer messaging without human review.
- Any path requires live system access before written permission and a data-handling plan.
- Charlie has not chosen exactly one approval-gated next step.

## Current recommendation

Keep the package local for now. If Charlie wants the lowest-risk external step later, choose **private remote backup** only after rerunning the local checks above and reviewing `docs/review-packet.md` end to end.
