# Client-Safe Intake Questionnaire Template

> Template for future approval-gated discovery only. Do not send this form, collect real business data, or request system access without Charlie's explicit approval and written client permission. Use fictional or redacted-style answers while this kit remains local.

## Purpose

Use this questionnaire to decide whether a small-business workflow audit is safe and useful enough to scope. It is designed to gather process context, not private records, credentials, customer exports, or regulated data.

## Before the call or form

- Confirm the business owner understands this is a workflow audit, not implementation, legal advice, financial advice, compliance certification, or guaranteed ROI.
- Ask for generalized examples only, such as "a typical quote request" or "a common booking handover".
- Do not ask for passwords, API keys, bank details, payroll data, medical/legal records, tax files, customer exports, inbox dumps, CRM exports, or private documents.
- If a real system review becomes necessary, stop and create a separate written permission and data-handling plan first.

## Fit check

1. What type of business is this?
2. How many people regularly handle admin, customer replies, bookings, quotes, or follow-ups?
3. Which repetitive admin task feels most annoying right now?
4. Which task would be risky, embarrassing, or unacceptable for AI to handle badly?
5. Are any workflows related to legal, medical, payroll, tax, credit, insurance, immigration, safeguarding, or other high-stakes decisions?

## Workflow map

For each candidate workflow, capture only non-sensitive summaries:

| Question | Safe answer guidance |
| --- | --- |
| What triggers the workflow? | General event only, e.g. "new quote request". |
| Who handles it today? | Role or team, not private staff details. |
| What steps happen? | Plain-language steps; avoid private customer content. |
| How often does it happen? | Approximate frequency is enough. |
| Where does information come from? | Tool category is enough; no exports or credentials. |
| What does a good outcome look like? | Business outcome, not guaranteed savings. |
| What can go wrong? | Trust, privacy, tone, accuracy, delay, or operational risks. |

## Automation safety screen

- Could a draft-only assistant help without sending anything externally?
- Can a human approve every customer-facing message before sending?
- Can the workflow be tested with fictional validation examples first?
- Is there a simple rollback or deactivation path?
- Would the owner be comfortable if the exact process appeared in the written report?

## Required stop conditions

Stop the audit intake and escalate to a separate approval/data-handling plan if the client wants to provide:

- account credentials, API keys, tokens, or admin access;
- raw inbox, CRM, accounting, payroll, bank, medical, legal, or customer exports;
- automated customer messaging without human review;
- regulated/high-stakes decision support;
- claims that require legal, compliance, financial, or industry-specialist review.

## Output handoff

After intake, convert the answers into:

1. `templates/scoring-rubric.md` workflow scores.
2. A shortlist of top 3 low-risk opportunities.
3. One recommended draft-only pilot.
4. Report sections for risks, non-goals, rollback, and approval gates.

Do not treat completed intake answers as approval to build, deploy, access tools, contact customers, create accounts, create payment pages, or publish anything.
