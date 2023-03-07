import { BOOK_ACTIONS } from '../../../const';
import {
  CreateBookFailureType,
  CreateBookRequestType,
  CreateBookSuccessType,
} from './bookAction.interface';

const { CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, CREATE_BOOK_FAILURE } =
  BOOK_ACTIONS;

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
