import { describe, it, expect } from "vitest";
import { swapNumber } from "./swapNumber";

describe("1.variable - swap number", () => {
  it("if swapNumber return successfully", () => {
    const { a, b } = swapNumber(1, 2);
    expect(a).toBe(2);
    expect(b).toBe(1);
  });
});
