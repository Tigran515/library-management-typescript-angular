export class SearchCriteriaDto {
  private authorName: string | undefined;
  private authorLname: string | undefined;
  private authorSname: string | undefined;
  private bookTitle: string | undefined;
  private isbn: string | undefined;
  private detail: string | undefined;


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
