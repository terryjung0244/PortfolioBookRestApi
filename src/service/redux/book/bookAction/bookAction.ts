import { CreateBookDataType } from '../../../../components/book/createBook/CreateBook.interface';
import { BookStateType } from '../../../../components/book/updateBook/UpdateBook.interface';
import { BOOK_ACTIONS } from '../../../const';
import { updateAuthorRequest } from '../../author/authorAction/authorAction';
import { CustomBookApiResultType } from '../bookSaga/bookSaga.interface';
import {
  BookSelectedIdType,
  CreateBookFailureType,
  CreateBookRequestType,
  CreateBookSuccessType,
  GetAllBookRequestType,
  UpdateBookRequestType,
} from './bookAction.interface';

const {
  BOOK_SELECT_ID,
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAILURE,
  GET_ALL_BOOK_REQUEST,
  GET_ALL_BOOK_SUCCESS,
  GET_ALL_BOOK_FAILURE,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
} = BOOK_ACTIONS;

export const sendAuthorIdForCreateBook = (
  selectedId: string,
): BookSelectedIdType => {
  return {
    type: BOOK_SELECT_ID,
    payload: selectedId,
  };
};

export const createBookRequest = (
  inputData: CreateBookDataType,
): CreateBookRequestType => {
  return {
    type: CREATE_BOOK_REQUEST,
    payload: inputData,
  };
};

export const createBookSuccess = (
  dataFromServer: CustomBookApiResultType,
): CreateBookSuccessType => {
  return {
    type: CREATE_BOOK_SUCCESS,
    payload: dataFromServer,
  };
};

export const createBookFailure = (
  dataFromServer: CustomBookApiResultType,
): CreateBookFailureType => {
  return {
    type: CREATE_BOOK_FAILURE,
    payload: dataFromServer,
  };
};

// GET ALL BOOKS
export const getAllBookRequest = (): GetAllBookRequestType => {
  return {
    type: GET_ALL_BOOK_REQUEST,
    payload: null,
  };
};

export const getAllBookSuccess = (dataFromServer: CustomBookApiResultType) => {
  return {
    type: GET_ALL_BOOK_SUCCESS,
    payload: dataFromServer,
  };
};

export const getAllBookFailure = (
  dataFromServer: CustomBookApiResultType | Error,
) => {
  return {
    type: GET_ALL_BOOK_FAILURE,
    payload: dataFromServer,
  };
};

//SEND BOOK ID FOR UPDATE
export const sendBookIdForUpdate = (selectedId: string): BookSelectedIdType => {
  return {
    type: BOOK_SELECT_ID,
    payload: selectedId,
  };
};

//UPDATE
export const updateBookRequest = (
  inputUpdateData: BookStateType,
): UpdateBookRequestType => {
  return {
    type: UPDATE_BOOK_REQUEST,
    payload: inputUpdateData,
  };
};
