export interface AuthorState {
  loading: boolean;
  message: string;
  error: Error | string | null;
  authorResult: [];
}
