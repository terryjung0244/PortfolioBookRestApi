import { put, takeLatest } from 'redux-saga/effects';
import { callFetch } from '../../../api/callFetch';
import { AUTHOR_ACTIONS } from '../../../const';
import {
  createAuthorFailure,
  createAuthorSuccess,
} from '../authorAction/authorAction';
import { CreateAuthorRequestType } from '../authorAction/authorAction.interface';
import { CustomAuthorResultType } from './authorSaga.interface';

const { CREATE_AUTHOR_REQUEST } = AUTHOR_ACTIONS;

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

export function* authorSagaWatcher() {
  yield takeLatest(CREATE_AUTHOR_REQUEST, createAuthorApi);
}

// https://us-east-2.aws.data.mongodb-api.com/app/data-mzwdn/endpoint/data/v1
