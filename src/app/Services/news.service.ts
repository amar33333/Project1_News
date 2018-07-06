import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable,of } from 'rxjs';
import {map, catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: Http) { }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(error.message);
    return Observable.throw(error.message || error);
  }
  public getNewsData():Observable<any> {
    let url = "https://newsapi.org/v2/top-headlines"
    let urlParms = '?country=us&category=business&apiKey=fd2d1977743c453ca1ab1784723afa98';

    return this.http
      .get(url + urlParms)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
    );
            
  }
  public getsearchData(keywords:string):Observable<any> {
    let url = "https://newsapi.org/v2/everything"
    let urlParms = '?q=' +keywords +'&from=2018-07-06&sortBy=popularity&apiKey=fd2d1977743c453ca1ab1784723afa98';

    return this.http
      .get(url + urlParms)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
    );
            
  }
}
