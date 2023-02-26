import { Reducer } from 'redux';
import { AUTHOR_ACTIONS } from '../../../const';
import { AuthorActionsType } from '../authorAction/authorAction.interface';
import { AuthorState } from './authorReducer.interface';
const { CREATE_AUTHOR_REQUEST, CREATE_AUTHOR_SUCCESS, CREATE_AUTHOR_FAILURE } =
  AUTHOR_ACTIONS;

const initialState: AuthorState = {
  loading: false,
  message: '',
  error: null,
  authorResult: [],
};

const authorReducer: Reducer<AuthorState, AuthorActionsType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CREATE_AUTHOR_REQUEST:
      return { ...state, loading: true };
    case CREATE_AUTHOR_SUCCESS:
      return { ...state, loading: false };
    case CREATE_AUTHOR_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default authorReducer;
