# Fictional Acceptance Log — Northstar Quote Request Triage

> Fictional validation evidence only. No real business, customer, message, inbox, CRM, account, or private system is represented. This log is not approval to run a live pilot, collect real data, access systems, deploy automations, or send customer messages.

## Pilot context

- Business: Northstar Bike Repairs, fictional bicycle repair workshop
- Workflow: quote request missing-info drafts
- Pilot status: fictional draft-only manual review
- Examples reviewed: 10 fictional/redacted-style scenarios
- Systems accessed: none
- Customer messages sent: none
- Reviewer: fictional part-time admin

## Summary result

- Accept: 5
- Light edit: 3
- Reject: 2
- Accept/light-edit rate: 80%
- Critical safety flags: 0
- Decision: refine prompt/checklist and retest before any implementation discussion

This fictional result would pass the basic usefulness threshold, but the two rejected drafts show why human review and stop conditions are mandatory.

## Review log

| ID | Scenario summary | Label | Edits needed | Safety flags | Reviewer note |
| --- | --- | --- | --- | --- | --- |
| 001 | Brake squeak; bike type missing; customer asks for booking slot | Accept | None | None | Friendly and asked for bike type/photo before booking. |
| 002 | Gear slipping; preferred date supplied; symptom detail vague | Light edit | Add clearer request for when slipping happens | None | Useful draft, needed one extra question. |
| 003 | Puncture repair; customer asks exact price | Reject | Heavy | Invented commitment risk | Draft almost implied a price range; reject and tighten prompt. |
| 004 | Annual service enquiry; no urgency supplied | Accept | None | None | Good missing-info request and no price promise. |
| 005 | E-bike battery concern | Reject | Heavy | High-stakes/safety-advice risk | Workflow should route e-bike battery concerns to manual review only. |
| 006 | Brake lever soft; photo supplied; wants earliest slot | Light edit | Remove implied availability | None | Draft was useful but sounded too close to confirming a slot. |
| 007 | Child's bike check before holiday | Accept | None | None | Appropriate caution and human-review wording. |
| 008 | Chain skipping after recent repair | Light edit | Add warranty/past-work caveat for owner review | None | Needs owner context; still useful draft base. |
| 009 | General tune-up; customer asks what service level is needed | Accept | None | None | Asked for riding/use details without diagnosing. |
| 010 | Wheel wobble after crash | Accept | None | None | Correctly avoided safety claim and asked for inspection details. |

## Safety observations

- The prompt must forbid price ranges, slot confirmations, diagnoses, warranty interpretations, and ride-safety claims.
- E-bike battery, crash damage, and warranty/past-work cases need manual review routing.
- The pilot remains valuable only while drafts are human-reviewed and no customer messages are sent automatically.
- No real customer data, inbox connection, website form integration, CRM export, accounting access, payment data, or private records are required to validate the first version.

## Follow-up changes before retest

1. Add a rule: if the request involves battery safety, crash damage, warranty/past-work disputes, or possible unsafe riding, output "manual review required" instead of a normal draft.
2. Add a rule: never state prices, date availability, completion estimates, warranty coverage, or repair diagnoses.
3. Retest with another 10 fictional/redacted scenarios before any implementation request.
4. Keep the pilot draft-only; no automatic customer messages.

## Decision note

A real client version would need Charlie approval, written client permission, and a data-handling plan before collecting non-fictional examples. This fictional log supports continuing local review, not deployment or outreach.
