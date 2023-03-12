import { AnyAction } from '@reduxjs/toolkit';
import { BOOK_ACTIONS } from '../../../const';

const {
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAILURE,
  BOOK_SELECT_ID,
} = BOOK_ACTIONS;

export interface BookSelectedIdType {
  type: typeof BOOK_SELECT_ID;
  payload: string;
}

export interface CreateBookRequestType {
  type: typeof CREATE_BOOK_REQUEST;
  payload: any;
}

export interface CreateBookSuccessType {
  type: typeof CREATE_BOOK_SUCCESS;
  payload: any;
}

export interface CreateBookFailureType {
  type: typeof CREATE_BOOK_FAILURE;
  payload: any;
}

export type BookActionsType =
  | AnyAction
  | CreateBookRequestType
  | CreateBookSuccessType
  | CreateBookFailureType;
