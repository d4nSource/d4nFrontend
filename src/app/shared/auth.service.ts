import { Injectable }     from '@angular/core';
import { Http, Headers}   from '@angular/http';

import { User }       from './user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  constructor(private _http: Http) { }

  signup(user: User) {
      const body = JSON.stringify(user);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this._http.post('localhost:3000/user', body, {headers: headers})
        .map(response => response.json())
        .catch(error => Observable.throw(error.json()));
  }
}
