import { State } from '../reducers/users.state';

import { Resources } from '../../resources/resources';
import { UsersComparerService } from '../services/users-comparer.service';

export const getUsers = (state: State) => {
  const users = state.sortBy !== null
  ? getFilteredUsers(state).sort((a, b) => UsersComparerService.compare(a, b, state.sortBy))
  : getFilteredUsers(state);

  if (users.length < Resources.usersPerPage) {
    return users;
  }

  const startIndex = (state.currentPage - 1) * Resources.usersPerPage;
  const endIndex = users.length < startIndex + Resources.usersPerPage ? users.length : startIndex + Resources.usersPerPage;
  return users.slice(startIndex, endIndex);
};

export const getPagesCount = (state: State) => {
  const users = getFilteredUsers(state);
  return Math.ceil(users.length / Resources.usersPerPage);
};

export const getFilter = (state: State) => state.filter;

export const getFilteredUsers = (state: State) => {
  if (!state.filter) {
    return state.users;
  }

  let users = state.users.map(x => ({...x}));

  if (state.filter.firstName && state.filter.firstName.length > 0) {
    users = users.filter(x => x.firstName.toLowerCase().match(state.filter.firstName.toLowerCase()));
  }

  if (state.filter.registrationDateStart) {
    users = users.filter(x => new Date(x.registrationDate) > new Date(state.filter.registrationDateStart));
  }

  if (state.filter.registrationDateEnd) {
    users = users.filter(x => new Date(x.registrationDate) < new Date(state.filter.registrationDateEnd));
  }

  return users;
};
