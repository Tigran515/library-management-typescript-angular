export class SearchCriteriaDto { //FIXME: rename
  private _authorName: string | undefined;
  private _authorLname: string | undefined;
  private _authorSname: string | undefined;
  private _bookTitle: string | undefined;
  private _isbn: string | undefined;
  private _detail: string | undefined;


  constructor(authorName: string | undefined = undefined, authorLname: string | undefined = undefined, authorSname: string | undefined = undefined, bookTitle: string | undefined = undefined, isbn: string | undefined = undefined) {
    this._authorName = authorName;
    this._authorLname = authorLname;
    this._authorSname = authorSname;
    this._bookTitle = bookTitle;
    this._isbn = isbn;
  }

  set setAuthorName(value: string | undefined) {
    this._authorName = value;
  }

  set setAuthorLname(value: string | undefined) {
    this._authorLname = value;
  }

  set setAuthorSname(value: string | undefined) {
    this._authorSname = value;
  }

  set setBookTitle(value: string | undefined) {
    this._bookTitle = value;
  }

  set setISBN(value: string | undefined) {
    this._isbn = value;
  }

  set setDetail(value: string | undefined) {
    this._detail = value;
  }

  get getAuthorName(): string | undefined {
    return this._authorName;
  }

  get getAuthorLname(): string | undefined {
    return this._authorLname;
  }

  get getAuthorSname(): string | undefined {
    return this._authorSname;
  }

  get getBookTitle(): string | undefined {
    return this._bookTitle;
  }

  get getISBN(): string | undefined {
    return this._isbn;
  }

  get getDetail(): string | undefined {
    return this._detail;
  }
}
