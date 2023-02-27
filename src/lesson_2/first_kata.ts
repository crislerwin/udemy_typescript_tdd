export enum Move {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
}

export class Game {
  private _count = 1;
  private _playerOneChoice = "";
  private _playerTwoChoice = "";
  private _resources = new Map();

  addResource(key: Move, value: Move) {
    this._resources.set(key, value);
  }

  playerOneChoice(value: Move) {
    this._playerOneChoice = value;
  }
  playerTwoChoice(value: Move) {
    this._playerTwoChoice = value;
  }
  playGame(): string {
    if (this._resources.get(this._playerOneChoice) === this._playerTwoChoice) {
      return this._playerOneChoice;
    }
    return "";
  }
  constructor() {}
}
