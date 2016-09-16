import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private _baseUrl = 'localhost:4300/user/';

  constructor(private _http: Http) { }

  getAllUsers() {
    return this._http.get(`${this._baseUrl}/all`)
      .toPromise()
      .then(response => response.json());

  }
}
