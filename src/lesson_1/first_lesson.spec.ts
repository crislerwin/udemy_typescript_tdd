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
    // Arrange
    const expected = `Hello, ${mockUsers[0].name}!`;
    const sut = new User();
    // Act
    const actual = sut.greet(mockUsers[0].name);
    // Assert
    expect(actual).toBe(expected);
  });
  test("Ensure the users list starts empty", () => {
    // Arrange
    const expected: string[] = [];
    const sut = new User();
    // Act
    const actual = sut.listUsers();
    // Assert
    expect(actual).toEqual(expected);
  });
  test("Add a user to the list", () => {
    // Arrange
    const expected = mockUsers[0];
    const sut = new User();
    // Act
    sut.addUser(mockUsers[0].name);
    const actual = sut.listUsers()[0];
    // Assert
    expect(actual).toEqual(expected);
  });
});
