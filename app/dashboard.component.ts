import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: [ 'app/dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  //Define a heroes array property.
  heroes: Hero[] = [];

  //Inject the HeroService in the constructor and hold it in a private heroService field.
  constructor(
    private router: Router,
    private heroService: HeroService) { 
  }

  //Call the service to get heroes inside the Angular ngOnInit lifecycle hook.
  ngOnInit(): void {
    this.heroService.getHeroes()
        //Cherry-pick four heroes (2nd, 3rd, 4th, and 5th)
      .then(heroes => this.heroes = heroes.slice(1, 5));
   }


  // getPriorityHeroes(): void {
  //   //we're now setting this.heroes to a Promise rather than an array of heroes.
  //   //Our callback sets the component's heroes property to the array of heroes returned by the service.   
  //    this.heroService.getPriorityHeroes().then(heroes => this.heroes = heroes);
  // }  

  // ngOnInit(): void {
  //   this.getPriorityHeroes();
  // }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}