import { describe, test, expect } from "vitest";
import { Game } from "./first_kata";

describe("Scissors, Paper, Rock Kata", () => {
  test("Scissors beats paper", () => {
    // Arrange
    const expected = "Scisors";
    const sut = new Game();
    // Act
    sut.addResource("Scisors", "Paper");
    sut.playerOneChoice("Scisors");
    sut.playerTwoChoice("Paper");
    const actual = sut.playGame();
    // Assert
    expect(actual).toBe(expected);
  });
});
