import { AnyAction } from '@reduxjs/toolkit';
import { BOOK_ACTIONS } from '../../../const';

const {
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAILURE,
  BOOK_SELECT_ID,
  GET_ALL_BOOK_REQUEST,
  // GET_ALL_BOOK_SUCCESS,
  // GET_ALL_BOOK_FAILURE,
} = BOOK_ACTIONS;

//SELECT AUTHOR ID FOR CREATE BOOK
export interface BookSelectedIdType {
  type: typeof BOOK_SELECT_ID;
  payload: string;
}

//CREATE
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
//GET ALL BOOKS
export interface GetAllBookRequestType {
  type: typeof GET_ALL_BOOK_REQUEST;
  payload: any;
}

export type BookActionsType =
  | AnyAction
  | CreateBookRequestType
  | CreateBookSuccessType
  | CreateBookFailureType
  | GetAllBookRequestType;
