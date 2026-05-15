#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const requiredFiles = [
  'README.md',
  'samples/fictional-intake.md',
  'templates/scoring-rubric.md',
  'templates/audit-report-template.md',
];

const requiredPhrases = [
  'fictional sample data',
  'human review',
  'Do not collect passwords',
  'Do not promise revenue',
  'does not guarantee ROI',
  'No customer messages should be sent automatically',
  'rollback',
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
