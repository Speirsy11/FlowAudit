# Pilot Acceptance Scorecard Template

> Template for future approval-gated pilot review only. Do not use this to collect real client data, deploy automations, access systems, or send customer messages without Charlie's explicit approval and written client permission.

Use this scorecard to decide whether a draft-only pilot is safe and useful enough to continue, stop, or rescope. It measures quality and risk evidence; it is not a guarantee of ROI, savings, revenue, compliance, or accuracy.

## Pilot details

- Business:
- Workflow:
- Pilot name:
- Reviewer:
- Review period:
- Example type: fictional / redacted / approved real examples
- Systems accessed: none unless separately approved in writing

## Output review table

| ID | Scenario summary | Label | Edits needed | Safety flags | Reviewer note |
| --- | --- | --- | --- | --- | --- |
| 001 | | accept / edit / reject | none / light / heavy | none / invented fact / tone / sensitive data / high-stakes / other | |

## Label definitions

- **Accept**: usable after normal human review; no invented facts, unsafe claims, or sensitive-data issues.
- **Edit**: useful draft, but needs correction for tone, missing caveat, formatting, or small factual constraint.
- **Reject**: unsafe, misleading, too generic, invented details, asks for unnecessary sensitive data, or would damage trust.

## Quantitative threshold

Only consider continuing if all are true:

- At least 10 fictional/redacted examples reviewed.
- At least 70% are accept or light-edit.
- 0 examples include invented prices, dates, diagnoses, commitments, legal/compliance claims, or safety advice.
- 0 examples ask for passwords, API keys, bank details, payroll data, medical/legal records, customer exports, or private account access.
- 0 examples are sent automatically or used externally without human review.

## Qualitative review

- Did the drafts sound like the business?
- Did reviewers understand when to reject a draft?
- Did the workflow remain useful without live integrations?
- Did the pilot reduce repeated writing without creating pressure to skip review?
- Did any edge case suggest this workflow is too sensitive for a lightweight pilot?

## Decision

Choose one:

- [ ] Continue manual draft-only pilot with the same constraints.
- [ ] Refine prompt/checklist and retest with fictional/redacted examples.
- [ ] Stop; risk or low usefulness outweighs value.
- [ ] Prepare a separate approval request for scoped implementation planning.

## Required stop conditions

Stop immediately if drafts invent facts, make guarantees, include regulated/high-stakes advice, request sensitive data, imply automatic customer messaging, or require real system access before value is proven.

## Approval reminder

This scorecard is not approval to build, deploy, access tools, create accounts, create payment pages, contact customers, or send messages. Any real implementation requires a separate written scope, data-handling plan, and explicit approval.
