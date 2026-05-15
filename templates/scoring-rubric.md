# SMB AI workflow scoring rubric

Score each workflow from 1-5 in each category. Higher total means a better candidate for a first safe automation.

| Category | 1 | 3 | 5 |
| --- | --- | --- | --- |
| Frequency | Rare / ad hoc | Weekly | Daily or many times weekly |
| Standardization | Highly variable | Some repeatable patterns | Clear trigger, inputs, and outputs |
| Data sensitivity | Sensitive personal/financial/legal/medical data | Some business/customer context | Low sensitivity or redacted examples only |
| Human review fit | Hard to review before action | Review possible but awkward | Easy draft/approve workflow |
| Reversibility | Hard to undo | Partial rollback possible | Easy to disable, revert, or ignore |
| Business value | Convenience only | Saves visible admin time | Reduces bottleneck or missed revenue risk |

## Interpretation

- 24-30: strong candidate for a supervised first automation.
- 18-23: candidate after scope tightening and risk controls.
- 12-17: document/process cleanup first.
- Below 12: avoid for now.

## Red flags that override score

- Requires passwords, API keys, unrestricted mailbox/drive access, or bank/accounting write access.
- Sends external messages automatically without human approval.
- Uses sensitive customer data where anonymized examples would work.
- Makes legal, medical, tax, credit, employment, or financial decisions.
- Has no clear owner, rollback plan, or monitoring step.
