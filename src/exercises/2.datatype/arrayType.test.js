import { defineArrayType } from "./arrayType";
import { describe, test } from "vitest";

describe("2.datatype - arrayType", () => {
  it("if myPets is an array", () => {
    const myPets = defineArrayType();
    expect(typeof myPets).toBe("array");
  });
  it("if myPets has more than one pet", () => {
    const myPets = defineArrayType();
    expect(myPets.length).toBeGreaterThan(0);

    it("if each pet has name property", () => {
      const myPets = defineArrayType();
      myPets.forEach((pet) => {
        expect(pet.name).toBeDefined();
      });
    });
    it("if each pet has age property", () => {
      const myPets = defineArrayType();
      myPets.forEach((pet) => {
        expect(pet.age).toBeDefined();
      });
    });
    it("if each pet has isMale property", () => {
      const myPets = defineArrayType();
      myPets.forEach((pet) => {
        expect(pet.isMale).toBeDefined();
      });
    });
    it("if each pet.name is type String", () => {
      const myPets = defineArrayType();
      myPets.forEach((pet) => {
        expect(typeof pet.name).toBe("string");
      });
    });
    it("if each pet.age is type Number", () => {
      const myPets = defineArrayType();
      myPets.forEach((pet) => {
        expect(typeof pet.age).toBe("number");
      });
    });
    it("if each pet.isMale is type Boolean", () => {
      const myPets = defineArrayType();
      myPets.forEach((pet) => {
        expect(typeof pet.isMale).toBe("boolean");
      });
    });
  });
});
