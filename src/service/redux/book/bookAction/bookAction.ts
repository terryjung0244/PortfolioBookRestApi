import { BOOK_ACTIONS } from '../../../const';
import {
  BookSelectedIdType,
  CreateBookFailureType,
  CreateBookRequestType,
  CreateBookSuccessType,
} from './bookAction.interface';

const {
  BOOK_SELECT_ID,
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAILURE,
} = BOOK_ACTIONS;

export const sendAuthorIdForCreateBook = (
  selectedId: string,
): BookSelectedIdType => {
  return {
    type: BOOK_SELECT_ID,
    payload: selectedId,
  };
};

export const createBookRequest = (): CreateBookRequestType => {
  return {
    type: CREATE_BOOK_REQUEST,
    payload: null,
  };
};

export const createBookSuccess = (): CreateBookSuccessType => {
  return {
    type: CREATE_BOOK_SUCCESS,
    payload: null,
  };
};

export const createBookFailure = (): CreateBookFailureType => {
  return {
    type: CREATE_BOOK_FAILURE,
    payload: null,
  };
};
