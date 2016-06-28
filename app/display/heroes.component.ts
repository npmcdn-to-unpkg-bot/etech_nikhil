import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { VARIABLE } from '../variable';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/display/heroes.component.html',
  styleUrls:  ['app/display/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: VARIABLE[];
  selectedHero: VARIABLE;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: VARIABLE) { this.selectedHero = hero; }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
