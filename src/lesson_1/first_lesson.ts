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
  private users: Params[] = [];
  greet(name: string) {
    return `Hello, ${name}!`;
  }
  addUser(name: string) {
    this.users.push({
      name,
      id: this.users.length + 1,
    });
  }

  listUsers() {
    return this.users;
  }
}
