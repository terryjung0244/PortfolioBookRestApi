/* eslint-disable prettier/prettier */
import { AuthorUpdateType } from '../../../../components/author/updateAuthor/updateAuthor.interface';
import { AUTHOR_ACTIONS } from '../../../const';
import { CustomAuthorResultType } from '../authorSaga/authorSaga.interface';
import {
  CreateAuthorFailureType,
  CreateAuthorRequestType,
  CreateAuthorSuccessType,
  DeleteAuthorFailureType,
  DeleteAuthorRequestType,
  DeleteAuthorSuccessType,
  GetAllAuthorFailureType,
  GetAllAuthorSuccessType,
  InputCreateAuthorType,
  SelectedAuthorIdType,
  UpdateAuthorFailureType,
  UpdateAuthorRequestType,
  UpdateAuthorSuccessType,
} from './authorAction.interface';

const {
  CREATE_AUTHOR_REQUEST,
  CREATE_AUTHOR_SUCCESS,
  CREATE_AUTHOR_FAILURE,
  GET_ALL_AUTHOR_REQUEST,
  GET_ALL_AUTHOR_SUCCESS,
  GET_ALL_AUTHOR_FAILURE,
  SELECTED_AUTHOR_ID,
  UPDATE_AUTHOR_REQUEST,
  UPDATE_AUTHOR_SUCCESS,
  UPDATE_AUTHOR_FAILURE,
  DELETE_AUTHOR_REQUEST,
  DELETE_AUTHOR_SUCCESS,
  DELETE_AUTHOR_FAILURE
} = AUTHOR_ACTIONS;

//***** CREATE AUTHOR *****//

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

//***** GET ALL AUTHOR *****//

export const getAllAuthorRequest = () => {
  return {
    type: GET_ALL_AUTHOR_REQUEST,
    payload: null,
  };
};

export const getAllAuthorSuccess = (dataFromServer: CustomAuthorResultType): GetAllAuthorSuccessType => {
  return {
    type: GET_ALL_AUTHOR_SUCCESS,
    payload: dataFromServer,
  };
};

export const getAllAuthorFailure = (dataFromServer: string): GetAllAuthorFailureType => {
  return {
    type: GET_ALL_AUTHOR_FAILURE,
    payload: dataFromServer,
  };
};

export const getSelectedAuthorId = (selectedAuthorId: string): SelectedAuthorIdType => {
  return {
    type: SELECTED_AUTHOR_ID,
    payload: selectedAuthorId
  }
}

// ***** UPDATE AUTHOR ***** //

export const updateAuthorRequest = (newInputData: AuthorUpdateType): UpdateAuthorRequestType => {
  return {
    type: UPDATE_AUTHOR_REQUEST,
    payload: newInputData,
  };
};

export const updateAuthorSuccess = (dataFromServer: CustomAuthorResultType ): UpdateAuthorSuccessType => {
  return {
    type: UPDATE_AUTHOR_SUCCESS,
    payload: dataFromServer,
  };
};

export const updateAuthorFailure = (dataFromServer: string): UpdateAuthorFailureType => {
  return {
    type: UPDATE_AUTHOR_FAILURE,
    payload: dataFromServer,
  };
};

// ***** DELETE AUTHOR ***** // 

export const deleteAuthorRequest = (SelectedAuthorId: string): DeleteAuthorRequestType => {
  return {
    type: DELETE_AUTHOR_REQUEST,
    payload: SelectedAuthorId, 
  }
}

export const deleteAuthorSuccess = (): DeleteAuthorSuccessType => {
  return {
    type: DELETE_AUTHOR_SUCCESS,
    payload: null
  }
}

export const deleteAuthorFailure = (): DeleteAuthorFailureType => {
  return {
    type: DELETE_AUTHOR_FAILURE,
    payload: null
  }
}