import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Startpage } from '../startpage'; 

@Injectable()
export class StartpageService {

  startpage: Startpage[] = [];

  constructor( private _http: Http) {}
    
  getStartpage() {
    return this._http.get('http://localhost:3000/message')
      .map(response => {
        const data = response.json();
        let objs: any [] = [];
        for (let i=0; i<data.length; i++) {
          let startpage =  new Startpage(data[i].id, data[i].content);
          objs.push(startpage);
        }
        return objs;
      })
      .catch(error => Observable.throw(error.content));
  }
  
}

/*private startpageUrl = 'app/startpage';

  getStartpage (): Observable <Test []> {
    return this._http.get(this.startpageUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  } 
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message : 
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.log(errMsg);
      return Observable.throw(errMsg);
  }
  */