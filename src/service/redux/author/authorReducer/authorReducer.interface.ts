export interface AuthorType {
  id: string;
  firstName: string;
  lastName: string;
}

export interface AuthorState {
  loading: boolean;
  message: string;
  error: Error | string | null;
  authorResult: AuthorType[];
}
