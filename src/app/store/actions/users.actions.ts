import { Action } from '@ngrx/store';

import * as models from '../../models';

export const LOAD_USERS = '[User] Load Users';
export const LOAD_USERS_SUCCESS = '[User] Load Users Success';

export const ADD_USER = '[User] Add User';
export const ADD_USER_SUCCESS = '[User] Add User Success';

export const CHANGE_PAGE = '[User] Change Page';

export const CLEAR_FILTER = '[Filter] Clear Filter';

export const SET_FILTER = '[Filter] Set Filter';

export const SET_SORT_BY = '[Sort] Set Sort By';

export class LoadUsersAction implements Action {
  readonly type = LOAD_USERS;

  constructor() { }
}

export class LoadUsersSuccessAction implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor(public payload: models.User[]) { }
}

export class AddUserAction implements Action {
  readonly type = ADD_USER;

  constructor(public payload: models.User) { }
}

export class AddUserSuccessAction implements Action {
  readonly type = ADD_USER_SUCCESS;

  constructor(public payload: models.User) { }
}

export class ChangePageAction implements Action {
  readonly type = CHANGE_PAGE;

  constructor(public payload: number) { }
}

export class ClearFilterAction implements Action {
  readonly type = CLEAR_FILTER;

  constructor() { }
}

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;

  constructor(public payload: models.Filter) { }
}

export class SetSortByAction implements Action {
  readonly type = SET_SORT_BY;

  constructor(public payload: string) { }
}

export type Actions =
    LoadUsersAction
  | LoadUsersSuccessAction
  | AddUserAction
  | AddUserSuccessAction
  | ChangePageAction
  | ClearFilterAction
  | SetFilterAction
  | SetSortByAction
  ;
