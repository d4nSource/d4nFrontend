import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';

import { User } from './user.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

declare var localStorage : any;

@Injectable()
export class AuthService {

  constructor(private _http: Http) {
   }

  signup(user: User) {
      const body = JSON.stringify(user);
      const headers = new Headers({'Content-Type': 'application/json'});
      const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
      return this._http.post('http://localhost:3000/user/new' + token, body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

  signin (user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post('http://localhost:3000/user/signin', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

  signout () {
    localStorage.clear();
  }

  isLoggedIn () {
    return localStorage.getItem('token') !== null;
  }
}
