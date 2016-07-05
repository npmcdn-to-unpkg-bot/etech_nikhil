import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AddItemComponent } from './add/add-item.component';
import { HeroesComponent } from './display/heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './display/hero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Heroes']">Display List</a>
      <a [routerLink]="['Dashboard']">Add Entry</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})
@RouteConfig([
  {
    path: '/add/add-item',
    name: 'Dashboard',
    component: AddItemComponent,
    
  },
  {
    path: '/edit/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/display/heroes',
    name: 'Heroes',
    component: HeroesComponent,
    useAsDefault: true
  }
])
export class AppComponent {
  title = 'Todo List';
}
