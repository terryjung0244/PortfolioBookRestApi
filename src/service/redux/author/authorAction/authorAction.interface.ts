import { AnyAction } from '@reduxjs/toolkit';
import { AUTHOR_ACTIONS } from '../../../const';
import { CustomAuthorResultType } from '../authorSaga/authorSaga.interface';

const { CREATE_AUTHOR_REQUEST, CREATE_AUTHOR_SUCCESS, CREATE_AUTHOR_FAILURE } =
  AUTHOR_ACTIONS;

// ***** Input Create Author Type *****
export interface InputCreateAuthorType {
  authorFirstName: string;
  authorLastName: string;
}

// ***** Create Author Request *****
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

// ***** Combine Actions *****
export type AuthorActionsType =
  | AnyAction
  | CreateAuthorRequestType
  | CreateAuthorSuccessType
  | CreateAuthorFailureType;
