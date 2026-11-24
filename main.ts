// One Sentence for a Traveler from 1800.
// The entry explains the modern internet to someone arriving from 1800
// with a single comparison drawn from their own world: every road on
// earth meeting in one square, where anyone can shout and the whole
// world hears them at once. No word in it was coined after 1800.
// The program writes exactly that sentence, nothing else, to the
// entry file the gate reads.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Picture every road on earth meeting in one square, where anyone can shout and the whole world hears them at once.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
