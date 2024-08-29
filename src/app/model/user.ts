export class User {
  username: string; //username
  name: string;
  lname: string;
  sname: string;
  role: string;
  //active:boolean;

  constructor(username: string, name: string, lastName: string, sureName: string, role: string) {
    this.username = username;
    this.name = name;
    this.lname = lastName;
    this.sname = sureName;
    this.role = role;
  }
}
