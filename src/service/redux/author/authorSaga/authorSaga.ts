/* eslint-disable @typescript-eslint/no-unused-vars */
import { put, takeLatest } from 'redux-saga/effects';
import { callFetch } from '../../../api/callFetch';
import { AUTHOR_ACTIONS } from '../../../const';
import {
  createAuthorFailure,
  createAuthorSuccess,
  getAllAuthorFailure,
  getAllAuthorSuccess,
  updateAuthorFailure,
  updateAuthorRequest,
  updateAuthorSuccess,
} from '../authorAction/authorAction';
import {
  CreateAuthorRequestType,
  DeleteAuthorRequestType,
  GetAllAuthorRequestType,
  UpdateAuthorRequestType,
} from '../authorAction/authorAction.interface';
import { CustomAuthorResultType } from './authorSaga.interface';

const {
  CREATE_AUTHOR_REQUEST,
  GET_ALL_AUTHOR_REQUEST,
  UPDATE_AUTHOR_REQUEST,
  DELETE_AUTHOR_REQUEST,
} = AUTHOR_ACTIONS;

const addDelay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, 1000);
  });
};

function* createAuthorApi(action: CreateAuthorRequestType): any {
  yield addDelay();

  try {
    const authorResult: CustomAuthorResultType = yield callFetch(
      '/author/createAuthor',
      'POST',
      action.payload,
    ); //3가지 파라미터를 넣어야함.
    if (authorResult.statusCode === 200) {
      yield put(createAuthorSuccess(authorResult));
    } else {
      yield put(createAuthorFailure(authorResult));
    }
  } catch (err) {
    console.log(err);
    yield put(createAuthorFailure(err as Error));
  }
}

function* getAllAuthorApi(action?: GetAllAuthorRequestType): any {
  try {
    console.log(action);
    const authorResult: CustomAuthorResultType = yield callFetch(
      '/author/getAllAuthor',
      'GET',
      null,
    );
    if (authorResult.statusCode === 200) {
      yield put(getAllAuthorSuccess(authorResult));
    } else {
      yield put(getAllAuthorFailure(authorResult.message));
    }
  } catch (err) {
    console.log(err);
  }
}

function* updateAuthorApi(action: UpdateAuthorRequestType): any {
  try {
    const authorResult: CustomAuthorResultType = yield callFetch(
      '/author/updateAuthor',
      'PUT',
      action.payload,
    );
    if (authorResult.statusCode === 200) {
      yield put(updateAuthorSuccess(authorResult));
    } else {
      yield put(updateAuthorFailure(authorResult.message));
    }
    yield getAllAuthorApi();
  } catch (err) {
    console.log(err);
  }
}

function* deleteAuthorApi(action: DeleteAuthorRequestType): any {
  try {
    const authorResult: CustomAuthorResultType = yield callFetch(
      `/author/deleteAuthor?authorId=${action.payload}`,
      'DELETE',
      null, // 'null' !!!
    );
    console.log(authorResult);
    yield getAllAuthorApi();
  } catch (err) {
    console.log(err);
  }
}

export function* authorSagaWatcher() {
  yield takeLatest(CREATE_AUTHOR_REQUEST, createAuthorApi);
  yield takeLatest(GET_ALL_AUTHOR_REQUEST, getAllAuthorApi);
  yield takeLatest(UPDATE_AUTHOR_REQUEST, updateAuthorApi);
  yield takeLatest(DELETE_AUTHOR_REQUEST, deleteAuthorApi);
}
