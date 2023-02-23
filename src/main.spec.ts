import { User } from "./main";
import { expect, test, describe } from "vitest";

describe("User", () => {
  test("greet", () => {
    const sut = new User();
    expect(sut.greet()).toBe("Hello, World!");
  });
});
