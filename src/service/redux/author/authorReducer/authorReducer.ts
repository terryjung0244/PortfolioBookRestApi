import { Reducer } from 'redux';
import { AUTHOR_ACTIONS } from '../../../const';
import { AuthorActionsType } from '../authorAction/authorAction.interface';
import { AuthorState } from './authorReducer.interface';
const {
  CREATE_AUTHOR_REQUEST,
  CREATE_AUTHOR_SUCCESS,
  CREATE_AUTHOR_FAILURE,
  GET_ALL_AUTHOR_REQUEST,
  GET_ALL_AUTHOR_SUCCESS,
  GET_ALL_AUTHOR_FAILURE,
  SELECTED_AUTHOR_ID,
  UPDATE_AUTHOR_REQUEST,
  UPDATE_AUTHOR_SUCCESS,
  UPDATE_AUTHOR_FAILURE,
  DELETE_AUTHOR_REQUEST,
  DELETE_AUTHOR_SUCCESS,
  DELETE_AUTHOR_FAILURE,
} = AUTHOR_ACTIONS;

const initialState: AuthorState = {
  loading: false,
  message: '',
  error: null,
  authorResult: [],
  selectedAuthorId: '',
};

const authorReducer: Reducer<AuthorState, AuthorActionsType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    // CREATE AUTHOR
    case CREATE_AUTHOR_REQUEST:
      return { ...state, loading: true };
    case CREATE_AUTHOR_SUCCESS:
      return { ...state, loading: false };
    case CREATE_AUTHOR_FAILURE:
      return { ...state, loading: false };

    // GET ALL AUTHOR
    case GET_ALL_AUTHOR_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_AUTHOR_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        authorResult: action.payload.authorResult,
      };
    case GET_ALL_AUTHOR_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // SELECTED AUTHOR ID
    case SELECTED_AUTHOR_ID:
      return { ...state, selectedAuthorId: action.payload };

    // UPDATE AUTHOR
    case UPDATE_AUTHOR_REQUEST:
      return { ...state, loading: true };
    case UPDATE_AUTHOR_SUCCESS:
      return { ...state, loading: false };
    case UPDATE_AUTHOR_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;

    // DELETE AUTHOR
    case DELETE_AUTHOR_REQUEST:
      return { ...state, loading: true };
    case DELETE_AUTHOR_SUCCESS:
      return { ...state, loading: false };
    case DELETE_AUTHOR_FAILURE:
      return { ...state, loading: false };
  }
};

export default authorReducer;
