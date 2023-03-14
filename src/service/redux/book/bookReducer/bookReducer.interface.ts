export interface BookType {
  title: string;
  content: string;
  genre: string;
  id: string;
}

export interface BookState {
  loading: boolean;
  message: string;
  error: null;
  selectedAuthorIdForCreateBook: string;
  bookResult: [];
}
