#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const requiredFiles = [
  'README.md',
  'samples/fictional-intake.md',
  'samples/fictional-discovery-notes.md',
  'samples/completed-audit-report.md',
  'templates/scoring-rubric.md',
  'templates/audit-report-template.md',
  'docs/service-one-pager.md',
  'docs/discovery-call-script.md',
  'docs/offer-options.md',
  'docs/landing-page-draft.md',
  'docs/local-review-checklist.md',
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
  'No customer messages should be sent automatically',
  'do not collect secrets',
  'approval to contact people',
  'not a financial guarantee',
  'Do not publish',
  'fictional validation notes',
  'payment page',
  'not approval to publish',
  'real-client data-handling plan',
  'choose exactly one approval-gated next step',
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
