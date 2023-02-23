import { User } from "./first_lesson";
import { expect, test, describe } from "vitest";

describe("User", () => {
  test("greet", () => {
    const sut = new User();
    expect(sut.greet("John")).toBe("Hello, John!");
  });
});
