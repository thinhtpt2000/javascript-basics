import { removeEnd } from "./removeEnd";
import { describe, it, expect } from "vitest";

describe("6.array-basics - removeEnd", () => {
  it("if removeEnd return successfully", () => {
    expect(removeEnd([1, 2, 3, 4, 5], 2)).toBe([1, 2, 3]);
    expect(removeEnd([5, 4, 3, 2, 1], 3)).toBe([5, 4]);
    expect(removeEnd([1, 1, 1, 1, 1], 0)).toBe([1, 1, 1, 1, 1]);
  });
});
