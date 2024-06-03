export interface BookDTO {
  id?: string;
  title: string;
  published: number;
  ISBN: string;
  authorId?: number[];
}
