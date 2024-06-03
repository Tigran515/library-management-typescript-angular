import {BookDTO} from "./book.dto";
import {AuthorDTO} from "./author.dto";

export interface BookAuthorDTO {
  bookDTO: BookDTO;
  authorDTO: AuthorDTO;
}
