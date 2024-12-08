import { describe, expect, test } from "vitest";
import { isOdd } from "./isOdd";

describe("3.condition - isOdd", () => {
  it("if isOdd return successfully", () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(4)).toBe(false);
    expect(isOdd(5)).toBe(true);
    expect(isOdd(6)).toBe(false);
    expect(isOdd(7)).toBe(true);
    expect(isOdd(8)).toBe(false);
    expect(isOdd(9)).toBe(true);
    expect(isOdd(10)).toBe(false);
  });
});
