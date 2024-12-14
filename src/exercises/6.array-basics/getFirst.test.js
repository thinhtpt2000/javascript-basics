import { getFirst } from "./getFirst";
import { describe, it, expect } from "vitest";

describe("6.array-basics - getFirst", () => {
  it("if getFirst return successfully", () => {
    expect(getFirst([1, 2, 3, 4, 5], 2)).toBe([1, 2]);
    expect(getFirst([-1, 19, 10, 6, 5], 3)).toBe([-1, 19, 10]);
    expect(getFirst([1, 1, 1, 1, 1], 0)).toBe([]);
    expect(getFirst([12, 123, 11, 11, 21], [1])).toBe([12]);
  });
});
