import { Reducer } from 'redux';
import { BOOK_ACTIONS } from '../../../const';
import { BookActionsType } from '../bookAction/bookAction.interface';
import { BookState } from './bookReducer.interface';

const {
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAILURE,
  BOOK_SELECT_ID,
  GET_ALL_BOOK_REQUEST,
  GET_ALL_BOOK_SUCCESS,
  GET_ALL_BOOK_FAILURE,
} = BOOK_ACTIONS;

const initialState: BookState = {
  loading: false,
  message: '',
  error: null,
  selectedAuthorIdForCreateBook: '',
  bookResult: [],
};

export const bookReducer: Reducer<BookState, BookActionsType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    // CREATE
    case CREATE_BOOK_REQUEST:
      return { ...state, loading: true };
    case CREATE_BOOK_SUCCESS:
      return { ...state, loading: false };
    case CREATE_BOOK_FAILURE:
      return { ...state, loading: false };
    // SELECT AUTHOR ID FOR CREATE BOOK
    case BOOK_SELECT_ID:
      return { ...state, selectedAuthorIdForCreateBook: action.payload };
    // GET ALL BOOKS
    case GET_ALL_BOOK_REQUEST:
      return { ...state };
    case GET_ALL_BOOK_SUCCESS:
      return { ...state };
    case GET_ALL_BOOK_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
