import { AUTHOR_ACTIONS } from '../../../const';
import { CustomAuthorResultType } from '../authorSaga/authorSaga.interface';
import {
  CreateAuthorFailureType,
  CreateAuthorRequestType,
  CreateAuthorSuccessType,
  InputCreateAuthorType,
} from './authorAction.interface';

const { CREATE_AUTHOR_REQUEST, CREATE_AUTHOR_SUCCESS, CREATE_AUTHOR_FAILURE } =
  AUTHOR_ACTIONS;

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
