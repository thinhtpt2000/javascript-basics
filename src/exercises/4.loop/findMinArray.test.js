import { describe, it, expect } from "vitest";
import { findMin } from "./findMinArray";

describe("4.loop - findMin", () => {
  it("if findMin return successfully", () => {
    expect(findMin([1, 2, 3, 4, 5])).toBe(1);
    expect(findMin([5, 4, 3, 2, 1])).toBe(1);
    expect(findMin([1, 1, 1, 1, 1])).toBe(1);
  });
});
