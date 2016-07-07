import { Component, OnInit, OnChanges, Input,Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { VARIABLE } from '../variable';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import _ from 'lodash';
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/display/heroes.component.html',
  styleUrls:  ['app/display/heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges{
  @Input('init') heroes: VARIABLE[] = [];
  selectedHero: VARIABLE;
  remaining: VARIABLE[];
  completed:VARIABLE[];
  filterType = 0;
  @Output('filterChange') filters = new EventEmitter();
    constructor(private _router: Router,
    private _heroService: HeroService) { }
    ngOnChanges(){
        
    }

  ngOnInit() {
        var self = this;
        this._heroService.getHeroes().subscribe((todos) => {
            self.heroes = todos;
        },(error) => {
             console.log(error);
        });
  }

  onSelect(hero: VARIABLE) { this.selectedHero = hero; }
  

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
  markTodo($event: any, hero: VARIABLE) {
 
 
             this._heroService.markTodo(hero);
         }
        done(heroes) {
         this.remaining = _.filter(this.heroes, { 'complete': false });
         this.completed = _.filter(this.heroes, { 'complete': true });
      }
      canShow(hero: VARIABLE) {
         if (this.filterType === 0) {
             return false;
         } else if (this.filterType === 1) {
             if (hero.complete) {
                 return true;
             }
         } else if (this.filterType === 2) {
             if (!hero.complete) {
                 return true;
             }
         }
         return false;
     }
     updateFilter(filtervar) {
         this.filterType = filtervar
         this.filters.emit(filtervar);
     }
sort() {
             this.heroes = _.sortBy(this.heroes, function(heroes) {
                 return heroes.name;
             })
     }

}

