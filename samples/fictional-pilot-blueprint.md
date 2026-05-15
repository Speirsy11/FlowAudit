# Fictional Pilot Blueprint — Northstar Quote Request Triage

> Fictional demo data only. This is not a live implementation plan, not approval to contact a business, and not approval to access systems, deploy automations, collect real data, or send customer messages.

## 1. Pilot summary

- Business: Northstar Bike Repairs, fictional independent bicycle repair workshop
- Workflow: quote request triage
- Pilot name: Missing-info draft reply assistant
- Owner/reviewer: fictional part-time admin
- Date range: fictional two-week manual pilot
- Status: draft-only manual-run example

Goal: help the admin draft replies that ask for missing bike details, symptoms, photos, and preferred dates without sending anything automatically.

## 2. Scope

### Included

- 10 fictional or heavily redacted quote requests.
- Manual prompt/checklist run by the admin.
- Draft-only customer replies.
- Human review before any message is copied into email.
- Accept/edit/reject feedback for each draft.

### Not included

- No inbox connection.
- No website form integration.
- No CRM, spreadsheet, accounting, bank, payroll, or customer database access.
- No automatic customer messages.
- No price, diagnosis, warranty, availability, or completion-date promises.
- No guarantee of ROI, savings, revenue, compliance, or accuracy.

## 3. Inputs and outputs

| Item | Fictional example | Safety requirement |
| --- | --- | --- |
| Repair category | brake issue / gear issue / puncture | Category only; no private customer details. |
| Customer message summary | "front brake squeaks and lever feels soft" | Redacted summary, not raw inbox export. |
| Missing details | bike type, urgency, photo, preferred drop-off dates | Ask only for necessary details. |
| Draft output | polite request for missing info | Human review before sending. |
| Feedback label | accept / edit / reject | Track locally during pilot only. |

## 4. Manual pilot workflow

1. Admin chooses one fictional/redacted quote request.
2. Admin fills a small checklist: repair category, symptoms, missing details, preferred dates if supplied.
3. Admin runs the draft prompt manually.
4. Admin checks the draft for invented facts, prices, diagnoses, dates, and tone.
5. Admin labels the draft accept/edit/reject.
6. Owner reviews the labels after 10 examples before approving any next step.

## 5. Draft prompt/checklist

```text
Draft a short, friendly reply from Northstar Bike Repairs.
Use only these details: [repair category], [symptom summary], [details already supplied], [missing details].
Ask for missing information politely.
Do not invent prices, availability, completion dates, diagnoses, warranty terms, or policies.
Do not claim the bike is safe to ride.
End by saying a human will review the details before confirming next steps.
This is a draft for human review only.
```

Reviewer checklist:

- [ ] No invented price or availability.
- [ ] No diagnosis beyond the supplied symptom summary.
- [ ] No safety claim about riding the bike.
- [ ] Asks only for missing information.
- [ ] Friendly workshop tone.
- [ ] Human reviewer approves before sending.

## 6. Success and stop criteria

Success signals for this fictional pilot:

- 10 fictional/redacted requests tested.
- At least 7 drafts accepted or lightly edited.
- No draft invents price, timing, diagnosis, warranty, or safety claims.
- Admin says the draft saves repeated writing without reducing trust.

Stop conditions:

- Drafts imply a diagnosis or safety advice.
- Drafts pressure customers or sound impersonal.
- Admin wants to connect the inbox before manual value is proven.
- Owner wants automatic sending before human-review quality is established.
- Real customer data would be needed without a written data-handling plan.

## 7. Rollback/deactivation

- Stop using the prompt immediately.
- Return to manual replies.
- Delete temporary fictional/redacted examples when the review is complete.
- Record the failure reason in the audit report before trying a different workflow.

## 8. Approval gates

Charlie approval and written client permission would be required before any real-world version of this pilot collects non-fictional examples, accesses a system, creates an automation, uses a paid tool, deploys anything, or sends customer-facing messages.
