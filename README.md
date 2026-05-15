# FlowAudit

**FlowAudit helps you review a small business workflow and find safe AI automation opportunities.**

It is a simple local toolkit for turning a business conversation into a workflow map, risk score, sample report, and first pilot plan. It uses fictional sample data by default.

## Who it is for

Consultants, developers, or operators who want to offer a fixed-scope SMB workflow audit without touching customer systems too early.

## How to use it

1. Read the example report: `samples/completed-audit-report.md`
2. Copy the safe intake questions from `templates/client-safe-intake-questionnaire.md`
3. Score workflows with `templates/scoring-rubric.md`
4. Draft the final report with `templates/audit-report-template.md`
5. Check the package:

```bash
npm run check
```

## What it helps you produce

- A client-safe intake questionnaire
- A workflow scoring rubric
- A sample audit report
- A draft-only pilot blueprint
- An acceptance scorecard
- Buyer-fit and delivery handoff checklists

## Example use case

A local service business asks, “Where could AI save us admin time?” FlowAudit helps you identify boring, reversible workflows like quote follow-ups, internal triage, or draft responses — then document risks before anyone connects real tools.

## Guardrails

- Use fictional sample data until there is explicit written permission.
- Do not collect passwords, API keys, bank details, customer records, payroll data, medical data, or legal case details.
- No customer messages should be sent automatically.
- Do not promise revenue; this does not guarantee ROI.
- Keep every pilot draft-only until a human review and approval step exists.
