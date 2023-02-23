import { User } from "./first_lesson";
import { expect, test, describe } from "vitest";
import { beforeEach } from "node:test";

describe("User", () => {
  test("greet", () => {
    const sut = new User();
    expect(sut.greet("John")).toBe("Hello, John!");
  });
  test("Create and find users", () => {
    const sut = new User();
    expect(sut.listUsers()).toEqual([]);
    sut.addUser("John");
    expect(sut.listUsers()).toEqual(["John"]);
    sut.addUser("Jane");
    expect(sut.listUsers()).toEqual(["John", "Jane"]);
  });
});
