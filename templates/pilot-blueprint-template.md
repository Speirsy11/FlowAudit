# Draft-Only Pilot Blueprint Template

> Template for future approval-gated implementation planning only. Do not deploy, connect accounts, create automations, message customers, collect real data, or access systems from this template without Charlie's explicit approval and written client permission.

## 1. Pilot summary

- Business:
- Workflow:
- Pilot name:
- Owner/reviewer:
- Date range:
- Status: draft-only / manual-run / approved build / stopped

One-sentence goal:

> Help a human reviewer create safer, faster drafts for a repetitive workflow without sending anything automatically.

## 2. Scope

### Included

- One narrowly defined workflow.
- Generalized, fictional, or redacted-style examples.
- Draft output only.
- Human review before any external action.
- Simple accept/edit/reject feedback tracking.

### Not included

- Live inbox, CRM, accounting, bank, payroll, medical, legal, or customer database access.
- Automatic customer messaging.
- Account creation, paid tools, deployment, scraping, or integrations.
- Compliance, legal, financial, tax, medical, employment, credit, insurance, immigration, or high-stakes decision support.
- Any guarantee of ROI, savings, revenue, compliance, or accuracy.

## 3. Inputs and outputs

| Item | Description | Safety requirement |
| --- | --- | --- |
| Input examples | | Fictional/redacted only unless separately approved. |
| Context fields | | Minimum necessary fields only. |
| Draft output | | Must be reviewed by a human before use. |
| Stored notes | | Avoid sensitive data; define retention before real use. |

## 4. Manual pilot workflow

1. Reviewer selects a fictional or heavily redacted example.
2. Reviewer runs the draft prompt/checklist manually.
3. Reviewer checks for invented facts, tone problems, missing caveats, or unsafe advice.
4. Reviewer labels the draft as accept, edit, or reject.
5. Reviewer records the reason for edits/rejections.
6. Owner reviews results before any implementation decision.

## 5. Draft prompt/checklist

```text
You are helping draft an internal, human-reviewed response for [workflow].
Use only the supplied details. Do not invent prices, dates, diagnoses, availability, guarantees, legal/compliance claims, or customer-specific facts.
If required information is missing, ask for it politely.
Output a draft for human review only.
```

Checklist before using a draft:

- [ ] No invented facts.
- [ ] No guarantees or high-stakes advice.
- [ ] No sensitive data copied unnecessarily.
- [ ] Tone matches the business.
- [ ] Human reviewer approves before anything is sent externally.

## 6. Success and stop criteria

### Success signals

- At least 10 fictional/redacted examples reviewed.
- Human accepts or lightly edits a majority of drafts.
- Drafts reduce repeated writing without increasing risk.
- Reviewers can explain when to reject a draft.

### Stop conditions

- Drafts invent facts, prices, availability, diagnoses, or commitments.
- Reviewers feel pressure to skip human review.
- The workflow requires sensitive exports or regulated/high-stakes decisions.
- Customers would be messaged automatically.
- The pilot needs account access, deployment, paid tools, or integrations before value is proven.

## 7. Rollback/deactivation

- Stop using the prompt/checklist.
- Delete any temporary fictional/redacted examples if no longer needed.
- Return to the manual process.
- Record why the pilot stopped and what would need to change before retrying.

## 8. Approval gates

Separate approval is required before:

- collecting non-fictional examples;
- accessing any client system;
- creating accounts, forms, automations, or payment pages;
- sending or scheduling customer messages;
- deploying tools or integrations;
- converting the pilot into implementation work.
