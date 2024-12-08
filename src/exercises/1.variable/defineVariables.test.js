import { defineVariables } from "./defineVariables";
import { describe, expect, test } from "vitest";

describe("1.variable - define variables", () => {
  it("if required variables are defined", () => {
    const { a, b, sum, difference, product, quotient } = defineVariables();
    expect(a).toBeDefined();
    expect(b).toBeDefined();
    expect(sum).toBeDefined();
    expect(difference).toBeDefined();
    expect(product).toBeDefined();
    expect(quotient).toBeDefined();
  });
  it("if b is not 0", () => {
    const { b } = defineVariables();
    expect(b).not.toBe(0);
  });
  it("if sum is a + b", () => {
    const { a, b, sum } = defineVariables();
    expect(sum).toBe(a + b);
  });
  it("if difference is a - b", () => {
    const { a, b, difference } = defineVariables();
    expect(difference).toBe(a - b);
  });
  it("if product is a * b", () => {
    const { a, b, product } = defineVariables();
    expect(product).toBe(a * b);
  });
  it("if quotient is a / b", () => {
    const { a, b, quotient } = defineVariables();
    expect(quotient).toBe(a / b);
  });
});
