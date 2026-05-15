# SMB AI Workflow Audit Kit — Local Review Packet

> Internal review packet only. Do not publish, push, sell, invoice, create a waitlist/payment page, contact anyone, collect real business data, or run a live audit from this document without Charlie's explicit approval.

## What this package is now

A local proof-of-offer package for a fixed-scope SMB AI workflow audit. It is meant to help Charlie decide whether the offer is concrete, safe, and useful enough for one later approval-gated validation step.

Current status:

- Fictional/sample data only.
- No remote configured or pushed.
- No public landing page.
- No outreach, calls, posts, forms, waitlists, invoices, or payment links.
- No client data, credentials, system access, scraping, deployment, or implementation work.

## Review order

1. Read `README.md` for the overall kit shape and guardrails.
2. Read `samples/completed-audit-report.md` as if receiving the deliverable after an audit.
3. Read `templates/client-safe-intake-questionnaire.md` to confirm future intake would avoid secrets, exports, and regulated data.
4. Read `docs/offer-options.md` for package clarity and whether the draft scope feels sellable.
5. Read `docs/landing-page-draft.md` for claims, safety, and CTA risk.
6. Run `npm run check` to verify package completeness and required guardrail phrases.

## Deliverables included

| Asset | Review question |
| --- | --- |
| `samples/completed-audit-report.md` | Would this feel useful enough to pay for if it matched a real business? |
| `templates/scoring-rubric.md` | Are the scores understandable and safety-weighted? |
| `templates/client-safe-intake-questionnaire.md` | Does intake avoid sensitive data and stop risky scopes early? |
| `docs/service-one-pager.md` | Is the promise narrow, practical, and credible? |
| `docs/discovery-call-script.md` | Could a future approved call validate demand without becoming outreach spam or consulting creep? |
| `docs/offer-options.md` | Are the package boundaries clear enough to quote later? |
| `docs/landing-page-draft.md` | Is the public copy safe enough to polish later without guarantees or hype? |
| `docs/local-review-checklist.md` | Are approval gates explicit before anything leaves the local machine? |

## Go / no-go criteria

### Continue locally if

- The completed fictional report is clear and specific.
- The offer can be explained in one sentence without vague "AI transformation" claims.
- The first paid version can be delivered without private system access by default.
- The intake process can work with generalized, fictional, or redacted-style examples.
- The audit has a clear stop condition before implementation, integrations, or customer messaging.

### Stop or rethink if

- The value depends on ROI, savings, compliance, or accuracy guarantees.
- The buyer would need to hand over inbox, CRM, accounting, payroll, bank, medical, legal, or customer exports before the audit has value.
- The first validation step would require cold outreach at scale, scraping, ads, payment setup, or public claims.
- The deliverable feels like generic AI advice rather than a concrete workflow decision-support report.

## One approval-gated next step options

Choose exactly one later, after local review. Until Charlie chooses and approves one, none of these are authorized.

1. **Private remote backup** — create a private GitHub repo and push this local package for safekeeping/review only.
2. **Public-safe repo prep** — prepare repository metadata and public README wording locally, then pause before any push.
3. **Single validation conversation** — approve one named person/business, exact wording, and channel for a low-pressure validation conversation using redacted/general examples only.

Recommended first external step, if the package passes local review: **private remote backup**. It preserves the work without making claims, publishing a landing page, collecting leads, or contacting anyone.

## Commands for local review

```bash
cd /Users/charliespeirs/Developer/smb-ai-workflow-audit-kit
npm run check
git status --short --branch
git log --oneline -8
```

## Approval reminder

This review packet is not approval to publish, push, contact people, collect real data, create forms, create payment pages, deploy anything, access systems, or implement automations. Any real-client work needs explicit written permission, a data-handling plan, and a separate implementation approval gate.
