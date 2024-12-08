import { describe, it, expect } from "vitest";
import { sumEvenNumbers } from "./sumEvenNumbersArray";

describe("4.loop - sumEvenNumbers", () => {
  it("if sumEvenNumbers return successfully", () => {
    expect(sumEvenNumbers([1, 2, 3, 4, 5])).toBe(6);
    expect(sumEvenNumbers([5, 4, 3, 2, 1])).toBe(6);
    expect(sumEvenNumbers([1, 1, 1, 1, 1])).toBe(0);
    expect(sumEvenNumbers([1, 1, 1, 1, 1, 2])).toBe(2);
  });
});
