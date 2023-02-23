import { User } from "./first_lesson";
import { expect, test, describe } from "vitest";
import { beforeEach } from "node:test";

describe("User", () => {
  const mockUsers = [
    {
      name: "John",
      id: 1,
    },
    {
      name: "Jane",
      id: 2,
    },
  ];

  test("greet", () => {
    const sut = new User();
    expect(sut.greet(mockUsers[0].name)).toBe(`Hello, ${mockUsers[0].name}!`);
  });
  test("Create and find users", () => {
    const sut = new User();
    expect(sut.listUsers()).toEqual([]);
    sut.addUser(mockUsers[0].name);
    expect(sut.listUsers()).toEqual([mockUsers[0]]);
    sut.addUser(mockUsers[1].name);
    expect(sut.listUsers()).toEqual(mockUsers);
  });
});
