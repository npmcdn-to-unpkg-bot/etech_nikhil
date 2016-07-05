<<<<<<< HEAD
import { Component, OnInit, OnChanges, Input } from '@angular/core';
=======
import { Component, OnInit, OnChanges } from '@angular/core';
>>>>>>> d20cce6c95ed3b713cec74550c02fd4b3e676253
import { Router } from '@angular/router-deprecated';

import { VARIABLE } from '../variable';
import { HeroService } from './hero.service';
import _ from 'lodash';
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/display/heroes.component.html',
  styleUrls:  ['app/display/heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges{
<<<<<<< HEAD
  @Input() heroes: VARIABLE[];
  selectedHero: VARIABLE;
  remaining: VARIABLE[];
  completed:VARIABLE[];
=======
  heroes: VARIABLE[];
  selectedHero: VARIABLE;
  test : Boolean = false;
>>>>>>> d20cce6c95ed3b713cec74550c02fd4b3e676253
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
 
<<<<<<< HEAD
 
             this._heroService.markTodo(hero);
         }
        done(heroes) {
         this.remaining = _.filter(this.heroes, { 'complete': false });
         this.completed = _.filter(this.heroes, { 'complete': true });
      }
=======
         if ($event == true) {
            // console.log("completed");
 
             this._heroService.markTodo(hero);
             return $event;
         }
         else {
             //console.log("not completed");
         }
 
     }
>>>>>>> d20cce6c95ed3b713cec74550c02fd4b3e676253

}

