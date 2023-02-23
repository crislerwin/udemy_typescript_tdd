export class User {
  private users: string[] = [];
  greet(name: string) {
    return `Hello, ${name}!`;
  }
  listUsers() {
    return this.users;
  }

  addUser(name: string) {
    this.users.push(name);
  }
}
