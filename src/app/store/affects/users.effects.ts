import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as actions from '../actions/users.actions';
import * as models from '../../models';
import { UsersProvider } from '../../providers';

@Injectable()
export class UsersEffect {

  constructor(private actions$: Actions,
    private usersProvider: UsersProvider) { }

  @Effect()
  loadUsers$: Observable<Action> = this.actions$
    .ofType<actions.LoadUsersAction>(actions.LOAD_USERS)
    .pipe(
      switchMap(() =>
        this.usersProvider.loadAllUsers()
          .pipe(
            map(
              (users: models.User[]) => new actions.LoadUsersSuccessAction(users)
            )
          )
      )
    );

  @Effect()
  addUser$: Observable<Action> = this.actions$
    .ofType<actions.AddUserAction>(actions.ADD_USER)
    .pipe(
    map(action => action.payload),
      switchMap((user: models.User) =>
        this.usersProvider.createUser(user)
          .pipe(
            map(
              (createdUser: models.User) => new actions.AddUserSuccessAction(createdUser)
            )
          )
      )
    );
}
