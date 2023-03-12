import { Reducer } from 'redux';
import { BOOK_ACTIONS } from '../../../const';
import { BookActionsType } from '../bookAction/bookAction.interface';
import { BookState } from './bookReducer.interface';

const {
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAILURE,
  BOOK_SELECT_ID,
} = BOOK_ACTIONS;

const initialState: BookState = {
  loading: false,
  message: '',
  error: null,
  selectedAuthorIdForCreateBook: '',
};

export const bookReducer: Reducer<BookState, BookActionsType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CREATE_BOOK_REQUEST:
      return { ...state, loading: true };
    case CREATE_BOOK_SUCCESS:
      return { ...state, loading: false };
    case CREATE_BOOK_FAILURE:
      return { ...state, loading: false };
    case BOOK_SELECT_ID:
      return { ...state, selectedAuthorIdForCreateBook: action.payload };
    default:
      return state;
  }
};
