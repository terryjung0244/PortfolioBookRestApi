import { put, takeLatest } from 'redux-saga/effects';
import { callFetch } from '../../../api/callFetch';

import { BOOK_ACTIONS } from '../../../const/index';
import {
  getAllAuthorFailure,
  getAllAuthorSuccess,
} from '../../author/authorAction/authorAction';
import {
  createBookFailure,
  createBookSuccess,
  getAllBookFailure,
  getAllBookSuccess,
} from '../bookAction/bookAction';
// import { createBookFailure, createBookSuccess } from '../bookAction/bookAction';
import {
  CreateBookRequestType,
  GetAllBookRequestType,
} from '../bookAction/bookAction.interface';
import { CustomBookApiResultType } from './bookSaga.interface';

const { CREATE_BOOK_REQUEST, GET_ALL_BOOK_REQUEST } = BOOK_ACTIONS;

const addDelay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, 1000);
  });
};

function* createBookApi(action: CreateBookRequestType): any {
  yield addDelay(); // 딜레이를 1초 주는 기능
  try {
    const bookApiResult: CustomBookApiResultType = yield callFetch(
      '/book/createBook',
      'POST',
      action.payload,
    );
    if (bookApiResult.statusCode === 200) {
      yield put(createBookSuccess(bookApiResult));
    } else {
      yield put(createBookFailure(bookApiResult));
    }
  } catch (err) {
    console.log(err);
  }
}

function* getAllBookApi(action: GetAllBookRequestType): any {
  try {
    const bookApiResult: CustomBookApiResultType = yield callFetch(
      '/book/getAllBook',
      'GET',
      null,
    );
    if (bookApiResult.statusCode === 200) {
      yield put(getAllBookSuccess(bookApiResult));
    } else {
      yield put(getAllBookFailure(bookApiResult));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* bookSagaWatcher() {
  yield takeLatest(CREATE_BOOK_REQUEST, createBookApi);
  yield takeLatest(GET_ALL_BOOK_REQUEST, getAllBookApi);
}
