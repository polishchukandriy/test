import { createSelector } from 'reselect';

import { AppState } from '../reducers';
import * as users from './users.selectors';

const getUsersState = (state: AppState) => state.users;

export const getUsers = createSelector(getUsersState, users.getUsers);
export const getPagesCount = createSelector(getUsersState, users.getPagesCount);
export const getFilter = createSelector(getUsersState, users.getFilter);
