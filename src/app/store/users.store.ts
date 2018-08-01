import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../store/reducers';
import { getUsers, getPagesCount, getFilter } from '../store/selectors';
import * as actions from '../store/actions/users.actions';
import * as models from '../models';

@Injectable()
export class UsersStore {
  constructor(private store: Store<AppState>) { }

  get users(): Observable<models.User[]> {
    return this.store.select(getUsers);
  }

  get pagesCount(): Observable<number> {
    return this.store.select(getPagesCount);
  }

  get filter(): Observable<models.Filter> {
    return this.store.select(getFilter);
  }

  public loadUsers() {
    this.store.dispatch(new actions.LoadUsersAction());
  }

  public doCreateUser(user: models.User) {
    this.store.dispatch(new actions.AddUserAction(user));
  }

  public doChangePage(page: number) {
    this.store.dispatch(new actions.ChangePageAction(page));
  }

  public doClearFilter() {
    this.store.dispatch(new actions.ClearFilterAction());
  }

  public doSetFilter(filter: models.Filter) {
    this.store.dispatch(new actions.SetFilterAction(filter));
  }

  public doSetSortBy(field: string) {
    this.store.dispatch(new actions.SetSortByAction(field));
  }
}
