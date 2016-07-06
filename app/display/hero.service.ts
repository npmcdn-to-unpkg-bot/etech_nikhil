import { VARIABLE } from '../variable';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HeroService {
private todos_Url = '/app/data.json';
     errorMessage: any;
     constructor(private http: Http) {
         
     }
     getHeroes(): Observable<VARIABLE[]> {
         return this.http.get(this.todos_Url)
             .map(this._extractData)
             .catch(this._handleError);
     }
    private _extractData(res: Response) {
         if (res.status < 200 || res.status >= 300) {
             throw new Error('Bad response status: ' + res.status);
         }
         let body = res.json();
         return body || [];
     }
     private _handleError(error: any) {
         let errMsg = error.message || 'Server error';
         return Observable.throw(errMsg);
     }
  getHero(id: number) {
    return this.getHeroes()
               .map(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

  markTodo(complete: any){
         
         return this.getHeroes().subscribe(heroes => heroes.filter(hero => hero.complete===complete)[0]); 
     }
}


