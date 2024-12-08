import { describe, it, expect } from "vitest";
import { calculateArea } from "./defineFunction";

describe("5.function - calculateArea", () => {
  it("if calculateArea is defined", () => {
    expect(calculateArea).toBeDefined();

    it("if calculateArea is a function", () => {
      expect(typeof calculateArea).toBe("function");

      it("if calculateArea has 2 parameters", () => {
        expect(calculateArea.length).toBe(2);
      });
      it("if calculateArea return a number", () => {
        expect(typeof calculateArea(3, 4)).toBe("number");
      });
    });
  });

  it("if calculateArea return successfully", () => {
    expect(calculateArea(3, 4)).toBe(12);
    expect(calculateArea(5, 5)).toBe(25);
    expect(calculateArea(6, 7)).toBe(42);
    expect(calculateArea(8, 9)).toBe(72);
  });
});
