import { describe, test, expect } from "vitest";
import { Game, Move } from "./first_kata";

describe("Scissors, Paper, Rock Kata", () => {
  test("Scissors beats paper", () => {
    // Arrange
    const expected = Move.Scissors;
    const sut = new Game();
    sut.addResource(Move.Scissors, Move.Paper);
    sut.playerOneChoice(Move.Scissors);
    sut.playerTwoChoice(Move.Paper);
    // Act
    const actual = sut.playGame();
    // Assert
    expect(actual).toBe(expected);
  });
});
