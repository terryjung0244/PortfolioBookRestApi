import { put, takeLatest } from 'redux-saga/effects';
import { callFetch } from '../../../api/callFetch';

import { BOOK_ACTIONS } from '../../../const/index';
import { createBookFailure, createBookSuccess } from '../bookAction/bookAction';
// import { createBookFailure, createBookSuccess } from '../bookAction/bookAction';
import { CreateBookRequestType } from '../bookAction/bookAction.interface';
import { CustomBookApiResultType } from './bookSaga.interface';

const { CREATE_BOOK_REQUEST } = BOOK_ACTIONS;

const addDelay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, 1000);
  });
};

function* createBookApi(action: CreateBookRequestType): any {
  yield addDelay();
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

export function* bookSagaWatcher() {
  yield takeLatest(CREATE_BOOK_REQUEST, createBookApi);
}
