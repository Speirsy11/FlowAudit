# Completed sample audit report — Northstar Bike Repairs

> Fictional demo data only. No real business, customer, address, phone number, account, private system, or financial record is represented.

## 1. Scope and permission

- Client/business: Northstar Bike Repairs, a fictional independent bicycle repair workshop
- Date: 2026-05-15
- Reviewer: Demo reviewer
- Systems discussed: shared inbox, website form, calendar, spreadsheet job tracker, accounting app, simple customer emails
- Systems accessed: none
- Data handling note: this example uses fictional and redacted-style details only; a real audit would require written scope, permission, and minimal data collection before reviewing any live workflow.

## 2. Executive summary

Northstar's best first AI-assisted workflow is **quote request triage**: generating a draft reply that asks customers for missing bike details, symptoms, photos, and preferred dates. This is repetitive, low-risk when draft-only, easy for the admin to review, and does not require direct access to payment, banking, or customer databases.

Do **not** start with invoice reminders or automatic customer status updates. Those workflows involve tone, payment context, and customer experience risks that should wait until the team has reviewed enough draft-only outputs.

This audit does not guarantee ROI, savings, revenue, compliance, or accuracy.

## 3. Workflow inventory

| Workflow | Trigger | Current owner | Pain | Score | Recommendation |
| --- | --- | --- | --- | --- | --- |
| Quote request triage | Website form or email arrives | Part-time admin | Repeated missing details; 15-25 minutes per request | 27 | Start with draft-only reply suggestions |
| Job status updates | Mechanic changes spreadsheet stage | Admin | Inconsistent updates; customers call for status | 22 | Later pilot after stage labels are cleaned up |
| Invoice reminder drafting | Completed job unpaid after 7 days | Owner | Irregular follow-up; sensitive tone | 18 | Defer; review accounting/privacy needs first |

## 4. Recommended first automation

- Name: Quote request missing-info draft
- Goal: reduce repetitive admin writing while keeping every customer message human-approved
- Inputs: redacted request text, selected repair category, optional uploaded photo indicator, preferred dates if supplied
- Output: a short draft reply asking only for missing information and explaining the next human-reviewed step
- Human approval step: admin reviews and edits every draft before sending; no customer messages should be sent automatically
- Data retained: only the approved draft and minimal request metadata in the existing job tracker, subject to the business's retention policy
- Rollback/deactivation: stop using the draft prompt, remove the shortcut/workflow, and return to manual email replies immediately if quality drops or customers are confused
- Success measure: admin accepts or lightly edits at least 70% of drafts during a two-week pilot, with no increase in customer complaints or missing details

## 5. Risk notes

- Privacy/security: do not connect the shared inbox, accounting app, bank, payroll, or customer database during the first pilot. Copy only redacted sample requests into the workflow until a separate security review approves a live integration.
- Over-automation: keep the first version draft-only. The value is faster human review, not removing judgment.
- Accuracy/hallucination: drafts must not invent prices, availability, repair diagnoses, warranty terms, or completion dates.
- Customer experience: messages should keep the workshop's friendly tone and should not sound like an automated rejection.
- Ownership: the part-time admin owns acceptance/rejection feedback; the owner reviews pilot results weekly.

## 6. Explicit safety disclaimers

- This audit does not guarantee ROI, savings, revenue, compliance, or accuracy.
- No customer messages should be sent automatically without human review.
- Do not collect passwords, API keys, bank details, customer records, payroll data, medical data, or legal case details for this pilot.
- No credentials, secrets, customer databases, inboxes, or financial systems should be connected without separate approval and security review.
- Any implementation should start with a reversible draft-only pilot.

## 7. Next actions

1. Confirm that quote request triage is the first pilot workflow.
2. Collect 10 fictional or heavily redacted sample requests that represent common missing-information cases.
3. Draft a reusable prompt/checklist for missing details; run it manually before connecting any tools.
4. Have the admin label each draft as accept, edit, or reject for two weeks.
5. Continue only if the pilot is useful, safe, and reversible; otherwise stop and return to manual replies.
