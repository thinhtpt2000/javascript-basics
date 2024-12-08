import { defineObjectType } from "./objectType";
import { describe, it, expect } from "vitest";

describe("2.datatype - objectType", () => {
  it("if myPet is an object", () => {
    const myPet = defineObjectType();
    expect(typeof myPet).toBe("object");
  });
  it("if myPet has name property", () => {
    const myPet = defineObjectType();
    expect(myPet.name).toBeDefined();
  });
  it("if myPet has age property", () => {
    const myPet = defineObjectType();
    expect(myPet.age).toBeDefined();
  });
  it("if myPet has isMale property", () => {
    const myPet = defineObjectType();
    expect(myPet.isMale).toBeDefined();
  });
  it("if myPet.name is type String", () => {
    const myPet = defineObjectType();
    expect(typeof myPet.name).toBe("string");
  });
  it("if myPet.age is type Number", () => {
    const myPet = defineObjectType();
    expect(typeof myPet.age).toBe("number");
  });
  it("if myPet.isMale is type Boolean", () => {
    const myPet = defineObjectType();
    expect(typeof myPet.isMale).toBe("boolean");
  });
});
