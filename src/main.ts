import { oneDay } from "@xkeshav/day";
import * as emoji from "npm:node-emoji";

const greet = (name: string) => `Hello, ${name}!`;

console.log(greet("world"));

console.log(
  emoji.emojify(`:watch: one day has  ${oneDay} milliseconds :unicorn:`),
);

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
