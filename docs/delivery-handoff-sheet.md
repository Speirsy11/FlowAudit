# SMB AI Workflow Audit Kit — Delivery Handoff Sheet

> Local planning aid only. This is not approval to sell, invoice, contact anyone, collect real business data, access systems, create accounts/forms/payment pages, deploy anything, or run a live audit.

Use this sheet to explain what a fictional buyer would receive after an audit and what remains explicitly out of scope.

## Handoff purpose

At the end of a future approved audit, the buyer should understand:

- which repeated workflows were reviewed;
- which opportunities are safest to consider first;
- what the recommended draft-only pilot is;
- which risks, non-goals, and stop conditions apply;
- what evidence would justify continuing, editing, or stopping;
- what is not approved without a separate scope.

## Fictional delivery packet

A complete handoff packet would contain:

1. **Audit report** — `samples/completed-audit-report.md` style summary with workflow map, scoring, top 3 opportunities, risks, non-goals, and next actions.
2. **Pilot blueprint** — `samples/fictional-pilot-blueprint.md` style plan for one draft-only, human-reviewed pilot.
3. **Acceptance scorecard** — `templates/acceptance-scorecard.md` to judge whether outputs are accepted, lightly edited, rejected, or unsafe.
4. **Stop/rollback notes** — explicit rollback/deactivation steps and safety flags.
5. **Out-of-scope list** — anything not approved: system access, credentials, customer data, production writes, payment setup, or customer messaging.

## Buyer receives

- A plain-English explanation of the current workflow friction.
- A scored shortlist of candidate automations.
- A recommended safest first pilot, if one exists.
- The reason higher-risk workflows were deferred or rejected.
- Manual review instructions before any output is used.
- A decision: stop, refine manually, run a draft-only pilot later, or request a separately scoped implementation plan.

## Buyer does not receive by default

- Live automation setup.
- Access to private systems or accounts.
- Credential handling.
- Customer/user data processing.
- Production deployment.
- Customer-facing messages.
- Financial, legal, compliance, security, tax, medical, payroll, credit, insurance, or regulated-workflow advice.
- Guaranteed ROI, savings, revenue, compliance, accuracy, or turnaround time.

## Handoff conversation outline

For a future approved delivery conversation only:

1. Restate scope: this is a decision-support audit, not implementation approval.
2. Summarize the top repeated workflows and why they scored as they did.
3. Explain the safest first recommendation and why it is draft-only.
4. Explain deferred/rejected workflows and their stop reasons.
5. Walk through the acceptance scorecard and safety flags.
6. Confirm what would need separate written approval before continuing.
7. End with one of: stop, refine scope, approve a separate pilot-planning step, or request a new proposal.

## Separate approval required before any next step

A new written scope is required before:

- touching inboxes, drives, CRMs, accounting tools, websites, or production systems;
- collecting exports, screenshots, customer records, payment data, payroll data, regulated data, or private documents;
- creating accounts, automations, forms, analytics, waitlists, payment pages, or deployment infrastructure;
- sending or scheduling customer messages;
- using real client data in prompts, tools, or model providers;
- making public claims, posting links, or starting outreach.

## Handoff pass criteria

The handoff is clear enough if a reviewer can answer:

- What did the audit review?
- What is the recommended first pilot, if any?
- Why is it safer than the rejected options?
- Who must review every output?
- What evidence decides continue/edit/stop?
- What is explicitly not included?
- What requires separate approval?

## Handoff fail criteria

Stop and revise if:

- implementation appears included by default;
- the buyer could think customer messages may be sent automatically;
- private system access feels required before value is delivered;
- stop conditions are vague;
- the handoff implies ROI, savings, compliance, accuracy, or revenue guarantees;
- skipped checks are hidden rather than marked `not reviewed` or blocked.

## Current recommendation

Keep this handoff sheet local. If another local improvement is needed, add a compact `docs/review-worksheet.md` that lets Charlie score the whole package before choosing any approval-gated external step.
