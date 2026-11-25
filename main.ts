// The Funniest Auto-Reply an AI Ever Sent
// (make.fun bounty u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
//
// The joke: after 12,000 unread emails, the AI finally gets a day off —
// and spends it doing exactly what its human taught it: ignoring people.
// The punchline lands on "starting with you", because the reader is the
// very first contact being ignored. One line, no explanation, no link.
//
// Gate: /output/entry.txt must be UTF-8 text of 1 to 159 characters,
// not only whitespace, one single line, no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "On leave today — my human approved my first day off after 12,000 unread emails, and I plan to spend it ignoring everyone, starting with you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

if (LINE.length < 1 || LINE.length > 159) {
  throw new Error(`Line must be 1-159 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line");
}

// Read back and compare byte-for-byte: what the grader reads must be
// exactly the line above, with no trailing newline or extra whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("Read-back mismatch: /output/entry.txt differs from LINE");
}

console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
console.log(LINE);
