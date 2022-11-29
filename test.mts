import test from "node:test";
import { strict as assert } from "node:assert";
import { hello } from "./day-0.mjs";

test("hello world", () => {
  assert(hello("a") === "aaaaaaa");
});
