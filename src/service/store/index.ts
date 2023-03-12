import { configureStore } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { authorSagaWatcher } from '../redux/author/authorSaga/authorSaga';
import authorReducer from '../redux/author/authorReducer/authorReducer';
import { bookReducer } from '../redux/book/bookReducer/bookReducer';
import { bookSagaWatcher } from '../redux/book/bookSaga/bookSaga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    // validSagaWatcher()
    authorSagaWatcher(),
    bookSagaWatcher(),
  ]);
}

export const createStore = () =>
  configureStore({
    reducer: {
      // validReducer
      authorReducer,
      bookReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  });

export const store = createStore();

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
