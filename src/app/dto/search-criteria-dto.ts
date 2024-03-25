export class SearchCriteriaDto { //FIXME: rename
  private authorName: string | undefined;
  private authorLname: string | undefined;
  private authorSname: string | undefined;
  private bookTitle: string | undefined;
  private isbn: string | undefined;
  private detail: string | undefined;


  constructor(authorName: string | undefined = undefined, authorLname: string | undefined = undefined, authorSname: string | undefined = undefined, bookTitle: string | undefined = undefined, isbn: string | undefined = undefined) {
    this.authorName = authorName;
    this.authorLname = authorLname;
    this.authorSname = authorSname;
    this.bookTitle = bookTitle;
    this.isbn = isbn;
  }

  set setAuthorName(value: string | undefined) {
    this.authorName = value;
  }

  set setAuthorLname(value: string | undefined) {
    this.authorLname = value;
  }

  set setAuthorSname(value: string | undefined) {
    this.authorSname = value;
  }

  set setBookTitle(value: string | undefined) {
    this.bookTitle = value;
  }

  set setISBN(value: string | undefined) {
    this.isbn = value;
  }

  set setDetail(value: string | undefined) {
    this.detail = value;
  }
}
