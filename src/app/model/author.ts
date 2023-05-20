export class Author {
  id: number | undefined;
  name: string;
  lname: string;
  sname: string;
  born: number

  constructor(name: string, lname: string, sname: string, born: number) {
    this.name = name;
    this.lname = lname;
    this.sname = sname;
    this.born = born;
  }
}
