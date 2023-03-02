import { AnyAction } from '@reduxjs/toolkit';
import { AuthorUpdateType } from '../../../../components/author/updateAuthor/updateAuthor.interface';
import { AUTHOR_ACTIONS } from '../../../const';
import { CustomAuthorResultType } from '../authorSaga/authorSaga.interface';

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
  DELETE_AUTHOR_FAILURE,
} = AUTHOR_ACTIONS;

// ***** Input Create Author Type *****
export interface InputCreateAuthorType {
  authorFirstName: string;
  authorLastName: string;
}

// ***** Create Author *****
export interface CreateAuthorRequestType {
  type: typeof CREATE_AUTHOR_REQUEST;
  payload: InputCreateAuthorType;
}

export interface CreateAuthorSuccessType {
  type: typeof CREATE_AUTHOR_SUCCESS;
  payload: CustomAuthorResultType;
}

export interface CreateAuthorFailureType {
  type: typeof CREATE_AUTHOR_FAILURE;
  payload: CustomAuthorResultType | Error;
}

// ***** Get All Author *****
export interface GetAllAuthorRequestType {
  type: typeof GET_ALL_AUTHOR_REQUEST;
  payload: null;
}

export interface GetAllAuthorSuccessType {
  type: typeof GET_ALL_AUTHOR_SUCCESS;
  payload: CustomAuthorResultType;
}

export interface GetAllAuthorFailureType {
  type: typeof GET_ALL_AUTHOR_FAILURE;
  payload: string;
}

// ***** Selected Author Id *****
export interface SelectedAuthorIdType {
  type: typeof SELECTED_AUTHOR_ID;
  payload: string;
}

// ***** Update Author *****
export interface UpdateAuthorRequestType {
  type: typeof UPDATE_AUTHOR_REQUEST;
  payload: AuthorUpdateType;
}

export interface UpdateAuthorSuccessType {
  type: typeof UPDATE_AUTHOR_SUCCESS;
  payload: any;
}

export interface UpdateAuthorFailureType {
  type: typeof UPDATE_AUTHOR_FAILURE;
  payload: any;
}

// ***** DELETE AUTHOR ***** //

export interface DeleteAuthorRequestType {
  type: typeof DELETE_AUTHOR_REQUEST;
  payload: any;
}

export interface DeleteAuthorSuccessType {
  type: typeof DELETE_AUTHOR_SUCCESS;
  payload: any;
}

export interface DeleteAuthorFailureType {
  type: typeof DELETE_AUTHOR_FAILURE;
  payload: any;
}

// ***** Combine Actions *****
export type AuthorActionsType =
  | AnyAction
  | CreateAuthorRequestType
  | CreateAuthorSuccessType
  | CreateAuthorFailureType
  | GetAllAuthorRequestType
  | GetAllAuthorSuccessType
  | GetAllAuthorFailureType
  | SelectedAuthorIdType
  | UpdateAuthorRequestType
  | UpdateAuthorSuccessType
  | UpdateAuthorFailureType
  | DeleteAuthorRequestType
  | DeleteAuthorSuccessType
  | DeleteAuthorFailureType;
