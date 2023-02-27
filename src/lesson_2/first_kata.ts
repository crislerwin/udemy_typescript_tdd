export class Game {
  private _count = 1;
  private _playerOneChoice = "";
  private _playerTwoChoice = "";
  private _resources = new Map();

  addResource(key: string, value: string) {
    this._resources.set(key, value);
  }

  playerOneChoice(value: string) {
    this._playerOneChoice = value;
  }
  playerTwoChoice(value: string) {
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
