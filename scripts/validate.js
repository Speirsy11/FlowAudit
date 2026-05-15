#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const requiredFiles = [
  'README.md',
  'CHANGELOG.md',
  'samples/fictional-intake.md',
  'samples/fictional-discovery-notes.md',
  'samples/completed-audit-report.md',
  'samples/fictional-pilot-blueprint.md',
  'samples/fictional-acceptance-log.md',
  'templates/scoring-rubric.md',
  'templates/client-safe-intake-questionnaire.md',
  'templates/pilot-blueprint-template.md',
  'templates/acceptance-scorecard.md',
  'templates/audit-report-template.md',
  'docs/service-one-pager.md',
  'docs/discovery-call-script.md',
  'docs/offer-options.md',
  'docs/landing-page-draft.md',
  'docs/local-review-checklist.md',
  'docs/buyer-fit-checklist.md',
  'docs/delivery-handoff-sheet.md',
  'docs/review-worksheet.md',
  'docs/local-demo-script.md',
  'docs/public-repo-metadata-draft.md',
  'docs/review-packet.md',
  'docs/public-safe-redaction-check.md',
  'docs/private-remote-backup-plan.md',
];

const requiredPhrases = [
  'fictional sample data',
  'human review',
  'Do not collect passwords',
  'Do not promise revenue',
  'does not guarantee ROI',
  'No customer messages should be sent automatically',
  'rollback',
  'Systems accessed: none',
  'draft-only pilot',
  'fictional and redacted-style details only',
  'explicit written permission',
  'do not collect secrets',
  'approval to contact people',
  'not a financial guarantee',
  'Do not publish',
  'fictional validation notes',
  'payment page',
  'real-client data-handling plan',
  'choose exactly one approval-gated next step',
  'No remote configured or pushed',
  'Client-Safe Intake Questionnaire Template',
  'Do not send this form',
  'written client permission',
  'Required stop conditions',
  'Go / no-go criteria',
  'Choose exactly one later',
  'private remote backup',
  'not approval to publish',
  'Draft-Only Pilot Blueprint Template',
  'Fictional Pilot Blueprint',
  'No automatic customer messages',
  'Stop conditions',
  'Rollback/deactivation',
  'Pilot Acceptance Scorecard Template',
  'Fictional Acceptance Log',
  'Accept/light-edit rate',
  'Critical safety flags',
  'Public-Safe / Private-Remote Preflight Check',
  'Release-blocking findings',
  'Do not create the remote or push until approved',
  'Private Remote Backup Plan',
  '5-Minute Local Demo Script',
  'Demo pass criteria',
  'Demo fail criteria',
  'fixed-scope SMB workflow audit offer',
  'Public-Safe Metadata Draft',
  'Buyer-Fit Checklist',
  'Good-fit signals',
  'Poor-fit / stop signals',
  'Any stop signal overrides the score',
  'Delivery Handoff Sheet',
  'Buyer does not receive by default',
  'Separate approval required before any next step',
  'Handoff pass criteria',
  'Review Worksheet',
  'Package clarity score',
  'Release blockers',
  'This worksheet cannot approve external action',
  'Short description',
  'Public-safe sample policy',
  'Release review checklist',
  'Approval request wording',
  'Rollback / containment',
  'Do not perform this step yet',
  'private remote backup',
];

let failures = [];
let corpus = '';

for (const rel of requiredFiles) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) {
    failures.push(`Missing required file: ${rel}`);
    continue;
  }
  corpus += '\n' + fs.readFileSync(full, 'utf8');
}

for (const phrase of requiredPhrases) {
  if (!corpus.includes(phrase)) failures.push(`Missing required guardrail phrase: ${phrase}`);
}

if (failures.length) {
  console.error('Validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('SMB AI workflow audit kit validation passed.');
