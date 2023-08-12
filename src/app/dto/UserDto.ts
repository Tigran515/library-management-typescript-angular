export class UserDto {
  username: string; //username
  name: string;
  lname: string;
  sname: string;

  constructor(username: string, name: string, lastName: string, sureName: string) {
    this.username = username;
    this.name = name;
    this.lname = lastName;
    this.sname = sureName;
  }
}
