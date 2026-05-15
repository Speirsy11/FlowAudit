# SMB AI Workflow Audit Kit — Review Worksheet

> Local review worksheet only. This is not approval to publish, push, contact anyone, collect business data, sell, invoice, create a form/waitlist/payment page, inspect systems, deploy anything, or run a live audit.

Use this worksheet to score whether the local package is ready for one later approval-gated next step.

## Review metadata

- Reviewer:
- Date:
- Repo state checked: `git status --short --branch`
- Validation checked: `npm run check`
- Sensitive-pattern grep reviewed: yes / no
- Proposed next step: keep local / private backup / public-safe prep / single validation conversation / other

## Package clarity score

Score each item 0, 1, or 2.

| Area | 0 | 1 | 2 | Score |
| --- | --- | --- | --- | ---: |
| One-sentence offer | Vague or hypey | Somewhat clear | Fixed-scope and plain-English | |
| Buyer fit | Unclear buyer | Some signals | Good-fit and poor-fit signals explicit | |
| Deliverable | Generic advice | Partly concrete | Completed sample report feels concrete | |
| Safe intake | Needs private data | Redaction needed | Avoids secrets/exports/system access by default | |
| Pilot boundary | Implementation implied | Some gates | Draft-only, reversible, human-reviewed | |
| Handoff clarity | Buyer may misunderstand | Some exclusions | Buyer receives/exclusions are obvious | |
| Externalization safety | Gates unclear | Some gates | Exactly one approval-gated next step required | |

Total:

## Interpretation

- **12-14:** strong local package; consider exactly one later approval-gated next step.
- **8-11:** refine locally before any external step.
- **0-7:** park or rethink the offer shape.

Any release blocker below overrides the score.

## Release blockers

Mark `[blocked]` if any are true:

- [ ] Any real client/customer/business/system/account/contact data appears in files or commit messages.
- [ ] The package implies permission to access private systems, credentials, exports, or customer records.
- [ ] The copy promises ROI, savings, revenue, compliance, accuracy, or outcomes.
- [ ] Customer messages could be sent automatically.
- [ ] Implementation, deployment, payment setup, outreach, or public posting appears bundled into review.
- [ ] The proposed next step includes more than one approval-gated action.
- [ ] Skipped checks can be mistaken for passed checks.

## Evidence notes

### Strongest assets

- `samples/completed-audit-report.md`:
- `templates/client-safe-intake-questionnaire.md`:
- `docs/buyer-fit-checklist.md`:
- `docs/delivery-handoff-sheet.md`:
- `docs/public-safe-redaction-check.md`:

### Weakest or unclear assets

- Asset:
- Concern:
- Local fix:

## Decision

Choose one:

- [ ] Keep local and improve further.
- [ ] Park; marginal improvements are now too low-value.
- [ ] Prepare private remote backup request for Charlie to approve later.
- [ ] Prepare public-safe repo prep request for Charlie to approve later.
- [ ] Prepare one named validation conversation request for Charlie to approve later.

## If continuing locally

Next local artifact or edit:

Stop condition for local work:

## If requesting approval later

Do not act yet. Draft only:

- Exact requested action:
- Exact destination/channel/person, if applicable:
- Exact command/message, if applicable:
- Explicit non-goals:
- Rollback/containment:

## Approval reminder

This worksheet cannot approve external action. It only helps decide whether the local package is strong enough to ask Charlie for one explicit approval-gated next step later.
