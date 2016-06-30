import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { VARIABLE } from '../variable';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/display/heroes.component.html',
  styleUrls:  ['app/display/heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges{
  heroes: VARIABLE[];
  selectedHero: VARIABLE;
  test : Boolean = false;
  constructor(
    private _router: Router,
    private _heroService: HeroService) { }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: VARIABLE) { this.selectedHero = hero; }
  

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
  markTodo($event: any, hero: VARIABLE) {
 
         if ($event == true) {
            // console.log("completed");
 
             this._heroService.markTodo(hero);
             return $event;
         }
         else {
             //console.log("not completed");
         }
 
     }

}

