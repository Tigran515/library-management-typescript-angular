export class User {
  login: string; //username
  name: string;
  lastName: string;
  sureName: string;

  constructor(login: string, name: string, lastName: string, sureName: string) {
    this.login = login;
    this.name = name;
    this.lastName = lastName;
    this.sureName = sureName;
  }
}
