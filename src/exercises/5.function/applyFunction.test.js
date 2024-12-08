import {
  describe,
  it,
  expect,
  vi,
  afterEach,
  afterAll,
  beforeEach,
} from "vitest";
import { greetEveryone } from "./applyFunction";

describe("5.function - applyFunction", () => {
  describe("if greetEveryone is defined", () => {
    expect(greetEveryone).toBeDefined();

    it("if greetEveryone is a function", () => {
      expect(typeof greetEveryone).toBe("function");
    });

    it("if greetEveryone has 1 parameter", () => {
      expect(greetEveryone.length).toBe(1);
    });

    it("if greetEveryone return a void", () => {
      expect(typeof greetEveryone(["Alice", "Bob"])).toBe("undefined");
    });
  });

  describe("if greetEveryone run correctly", () => {
    const mocks = vi.hoisted(() => {
      return {
        sayHello: vi.fn(),
      };
    });

    vi.mock("./sayHello", () => {
      return {
        sayHello: mocks.sayHello,
      };
    });

    beforeEach(() => {
      vi.resetAllMocks();
    });

    it("if greetEveryone run correctly with 1 name", () => {
      greetEveryone(["Alice"]);
      expect(mocks.sayHello).toHaveBeenCalledTimes(1);
      expect(mocks.sayHello).toHaveBeenCalledWith("Alice");
    });

    it("if greetEveryone run correctly with 2 names", () => {
      greetEveryone(["Alice", "Bob"]);
      expect(mocks.sayHello).toHaveBeenCalledTimes(2);
      expect(mocks.sayHello).toHaveBeenCalledWith("Alice");
      expect(mocks.sayHello).toHaveBeenCalledWith("Bob");
    });

    it("if greetEveryone run correctly with 0 names", () => {
      greetEveryone([]);
      expect(mocks.sayHello).not.toHaveBeenCalled();
    });

    it("if greetEveryone run correctly with no names", () => {
      greetEveryone([""]);
      expect(mocks.sayHello).toHaveBeenCalledTimes(1);
      expect(mocks.sayHello).toHaveBeenCalledWith("World");
    });
  });
});
