import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Resources } from '../resources/resources';

import { User } from '../models';

@Injectable()
export class UsersProvider {
  constructor(private http: HttpClient) {}

  loadAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}${Resources.users}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post(`${environment.apiUrl}${Resources.users}`, user).pipe(map(x => <User>x));
  }
}
