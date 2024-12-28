import bubble from "./bubble.js";
import insertion from "./insertion.js";
import merge from "./merge.js";
import quick from "./quick.js";
import random from "./random.js";
import selection from "./selection.js";

const items = random(process.argv.length > 2 ? +process.argv[2] : 10);

const result = [
  { name: "bubble", impl: bubble },
  { name: "insertion", impl: insertion },
  { name: "merge", impl: merge },
  { name: "quick", impl: quick },
  { name: "selection", impl: selection },
].map((o) => {
  const start = process.hrtime();
  const sorted = o.impl(items);
  const elapsed = process.hrtime(start);
  return {
    name: o.name,
    time: `${elapsed[0]}s ${elapsed[1] / 1000000}ms`,
    items: sorted.length,
  };
});

console.table(result);
