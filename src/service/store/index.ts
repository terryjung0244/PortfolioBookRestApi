import { configureStore } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { authorSagaWatcher } from '../redux/author/authorSaga/authorSaga';
import authorReducer from '../redux/author/authorReducer/authorReducer';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    // validSagaWatcher()
    authorSagaWatcher(),
  ]);
}

export const createStore = () =>
  configureStore({
    reducer: {
      // validReducer
      authorReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  });

export const store = createStore();

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
