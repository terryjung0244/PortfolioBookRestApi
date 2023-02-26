import { AUTHOR_ACTIONS } from '../../../const';
import { CustomAuthorResultType } from '../authorSaga/authorSaga.interface';
import {
  CreateAuthorFailureType,
  CreateAuthorRequestType,
  CreateAuthorSuccessType,
  InputCreateAuthorType,
} from './authorAction.interface';

const {
  CREATE_AUTHOR_REQUEST,
  CREATE_AUTHOR_SUCCESS,
  CREATE_AUTHOR_FAILURE,
  GET_ALL_AUTHOR_REQUEST,
  GET_ALL_AUTHOR_SUCCESS,
  GET_ALL_AUTHOR_FAILURE,
} = AUTHOR_ACTIONS;

//***** Create Author *****
export const createAuthorRequest = (
  inputCreateAuthor: InputCreateAuthorType,
): CreateAuthorRequestType => {
  return {
    type: CREATE_AUTHOR_REQUEST,
    payload: inputCreateAuthor,
  };
};

export const createAuthorSuccess = (
  dataFromServer: CustomAuthorResultType,
): CreateAuthorSuccessType => {
  return {
    type: CREATE_AUTHOR_SUCCESS,
    payload: dataFromServer,
  };
};

export const createAuthorFailure = (
  dataFromServer: CustomAuthorResultType | Error,
): CreateAuthorFailureType => {
  return {
    type: CREATE_AUTHOR_FAILURE,
    payload: dataFromServer,
  };
};

//***** Get All Author *****
export const getAllAuthorRequest = () => {
  return {
    type: GET_ALL_AUTHOR_REQUEST,
    payload: null,
  };
};

export const getAllAuthorSuccess = () => {
  return {
    type: GET_ALL_AUTHOR_SUCCESS,
    payload: null,
  };
};

export const getAllAuthorFailure = () => {
  return {
    type: GET_ALL_AUTHOR_FAILURE,
    payload: null,
  };
};
