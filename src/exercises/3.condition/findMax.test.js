import { findMax } from "./findMax";
import { describe, it, expect } from "vitest";

describe("3.condition - findMax", () => {
  it("if findMax return successfully", () => {
    expect(findMax(1, 2)).toBe(2);
    expect(findMax(2, 1)).toBe(2);
    expect(findMax(1, 1)).toBe(1);
  });
});
