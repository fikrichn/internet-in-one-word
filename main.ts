// The Internet in One Word — entry: "babble".
// Everyone talking at once, nobody listening: that is the whole internet.
// The program writes exactly that one word (no trailing newline) to
// /output/entry.txt. Node 22, standard library only.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const word = 'babble';
// The judge's first criterion is a single word: refuse anything with
// whitespace in it, so a typo can never turn the entry into a phrase.
if (/\s/.test(word)) throw new Error('entry word must be a single word');
if (word.length < 1 || word.length > 30) {
  throw new Error('entry word is outside the 1-30 character gate');
}
const dest = join(outDir, 'entry.txt');
writeFileSync(dest, word, 'utf8');

// Verify the written file, not just its size: same bytes, same word.
const written = readFileSync(dest, 'utf8');
if (written !== word) throw new Error('output does not match the entry word');
if (written.length < 1 || written.length > 30) {
  throw new Error('entry word is outside the 1-30 character gate');
}
