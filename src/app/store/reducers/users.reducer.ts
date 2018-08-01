import { State, initialState } from './users.state';
import * as actions from '../actions/users.actions';
import * as models from '../../models';

export function usersReducer(state: State = initialState, action: actions.Actions): State {
  switch (action.type) {

    case actions.LOAD_USERS_SUCCESS: {
      return {
        ...state,
        currentPage: 1,
        users: action.payload,
      };
    }

    case actions.ADD_USER_SUCCESS: {
      return {
        ...state,
        users: [ ...state.users, action.payload ],
      };
    }

    case actions.CHANGE_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case actions.CLEAR_FILTER: {
      return {
        ...state,
        filter: null,
      };
    }

    case actions.SET_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    case actions.SET_SORT_BY: {
      const sortBy: models.Sort = {
        field: action.payload,
        isAscending: state.sortBy !== null && (!state.sortBy.isAscending && state.sortBy.field === action.payload)
      };
      return {
        ...state,
        sortBy: sortBy
      };
    }

    default:
      return state;
  }
}
