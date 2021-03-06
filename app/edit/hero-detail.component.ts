import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { VARIABLE } from '../variable';
import { HeroService } from '../display/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  hero: VARIABLE;

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}
