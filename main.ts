import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Exit — one funny single-line resignation letter.
// IT-support voice: formal letter opening ("I resign, effective
// immediately"), then the turn — quitting to chase the dream of never
// again explaining email attachments to a grown adult. The punchline
// lands on the most relatable support-desk grievance there is, and the
// whole thing reads like a letter someone could actually send.
const line =
  "I resign, effective immediately, to pursue my dream of never explaining to a grown adult how to attach a file to an email again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
