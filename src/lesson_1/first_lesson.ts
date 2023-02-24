type Params = {
  name: string;
  id: number;
};

interface IUser {
  greet(name: string): string;
  addUser(name: string): void;
  listUsers(): Params[];
}

export class User implements IUser {
  user: Params;
  private allUsers: Params[] = [];
  greet() {
    return `Hello, ${this.user.name}!`;
  }
  addUser() {
    this.allUsers.push({ ...this.user, id: this.allUsers.length + 1 });
  }

  listUsers() {
    return this.allUsers;
  }
  constructor(user: Params) {
    this.user = user;
  }
}
