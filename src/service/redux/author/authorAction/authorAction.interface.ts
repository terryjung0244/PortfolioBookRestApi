import { AnyAction } from '@reduxjs/toolkit';
import { AUTHOR_ACTIONS } from '../../../const';
import { CustomAuthorResultType } from '../authorSaga/authorSaga.interface';

const {
  CREATE_AUTHOR_REQUEST,
  CREATE_AUTHOR_SUCCESS,
  CREATE_AUTHOR_FAILURE,
  GET_ALL_AUTHOR_REQUEST,
  GET_ALL_AUTHOR_SUCCESS,
  GET_ALL_AUTHOR_FAILURE,
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
  payload: null;
}

export interface GetAllAuthorFailureType {
  type: typeof GET_ALL_AUTHOR_FAILURE;
  payload: null;
}

// ***** Combine Actions *****
export type AuthorActionsType =
  | AnyAction
  | CreateAuthorRequestType
  | CreateAuthorSuccessType
  | CreateAuthorFailureType;
