import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	//below are called meta-data
	moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    //The styleUrls property is an array of style file names (with paths). We could list 
    //multiple style files from different locations if we needed them.
    styleUrls: [ 'heroes.component.css' ]
	//We have to teach the injector how to make a HeroService by registering a HeroService provider. 
	//The providers array tells Angular to create a fresh instance of the HeroService when it creates a new AppComponent. 
	//The AppComponent can use that service to get heroes and so can every child component of its component tree.
	//providers: [HeroService]
})
//export the class to make it available to other components.
export class HeroesComponent implements OnInit {
	//Start adding stuff here 	
	heroes: Hero[];
	selectedHero: Hero;

	// NOT: heroService = new HeroService();
	//The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
	//Now Angular will know to supply an instance of the HeroService when it creates a new AppComponent.
	//https://angular.io/docs/ts/latest/guide/dependency-injection.html
	constructor(
		private router: Router,
		private heroService: HeroService) { 
	}

	//We don't really need a dedicated method to wrap one line. We write it anyway:	
	getHeroes(): void {
		//we're now setting this.heroes to a Promise rather than an array of heroes.
		//Our callback sets the component's heroes property to the array of heroes returned by the service. 	
	   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}	

	ngOnInit(): void {
		this.getHeroes();
  	}

  	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}	

	gotoDetail(): void {
	    this.router.navigate(['/detail', this.selectedHero.id]);
	}
}


