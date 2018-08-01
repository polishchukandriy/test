import { User, Sort } from '../../models';

export class UsersComparerService {
  public static compare(a: User, b: User, sort: Sort): number {
      if (a[sort.field] < b[sort.field]) {
        return sort.isAscending ? 1 : -1;
      }
      if (a[sort.field] > b[sort.field]) {
        return sort.isAscending ? -1 : 1;
      }
      return 0;
  }
}
