export class Book {
  id: number | undefined;
  title: string;
  published: number;
  isbn: string;

  constructor(title: string, published: number, isbn: string) {
    this.title = title;
    this.published = published;
    this.isbn = isbn;
  }
}
