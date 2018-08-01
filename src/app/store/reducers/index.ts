import * as users from './users.state';
import { usersReducer } from './users.reducer';

export interface AppState {
  users: users.State;
}

export const reducers: any = {
  users: usersReducer,
};
