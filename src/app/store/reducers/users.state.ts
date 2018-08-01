import { User, Filter, Sort } from '../../models';

export interface State {
  users: User[];
  currentPage: number;
  filter: Filter;
  sortBy: Sort;
}

export const initialState: State = {
  users: [],
  currentPage: null,
  filter: null,
  sortBy: null,
};
