import { CreateBookDataType } from '../../../../components/book/createBook/CreateBook.interface';
import { BOOK_ACTIONS } from '../../../const';
import { CustomBookApiResultType } from '../bookSaga/bookSaga.interface';
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
