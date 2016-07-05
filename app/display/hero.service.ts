import { VARIABLE } from '../variable';
import { DATA } from '../data';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(DATA);
  }


  getHero(id: number) {
    return this.getHeroes()
               .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

  markTodo(complete: any){
         
         return this.getHeroes().then(heroes => heroes.filter(hero => hero.complete===complete)[0]); 
     }
}


