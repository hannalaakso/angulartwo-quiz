import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	//below are called meta-data?
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
	<ul class="heroes">
	  <!-- The (*) prefix to ngFor indicates that the <li> element and its children constitute a master template. -->
	  <!-- The let keyword before "hero" identifies hero as a template input variable. 
	  We can reference this variable within the template to access a hero’s properties. 
	  https://angular.io/docs/ts/latest/guide/displaying-data.html#!#ngFor
	  -->
	  <!-- The key is the name of the CSS class (selected). The value is true if the two heroes match 
	  and false otherwise. We’re saying “apply the selected class if the heroes match, remove it if they don’t”. 
	  Notice in the template that the class.selected is surrounded in square brackets ([]). This is the syntax for 
	  a property binding, a binding in which data flows one way from the data source (the expression hero === selectedHero) 
	  to a property of class. https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding
	  -->
	  <li *ngFor="let hero of heroes" 	 
	  [class.selected]="hero === selectedHero" 
	  (click)="onSelect(hero)">
	    <span class="badge">{{hero.id}}</span> {{hero.name}}
	  </li>
	</ul>	
	<my-hero-detail [hero]="selectedHero"></my-hero-detail>
  	   `,
  	styles: [`
	  .selected {
	    background-color: #CFD8DC !important;
	    color: white;
	  }
	  .heroes {
	    margin: 0 0 2em 0;
	    list-style-type: none;
	    padding: 0;
	    width: 15em;
	  }
	  .heroes li {
	    cursor: pointer;
	    position: relative;
	    left: 0;
	    background-color: #EEE;
	    margin: .5em;
	    padding: .3em 0;
	    height: 1.6em;
	    border-radius: 4px;
	  }
	  .heroes li.selected:hover {
	    background-color: #BBD8DC !important;
	    color: white;
	  }
	  .heroes li:hover {
	    color: #607D8B;
	    background-color: #DDD;
	    left: .1em;
	  }
	  .heroes .text {
	    position: relative;
	    top: -3px;
	  }
	  .heroes .badge {
	    display: inline-block;
	    font-size: small;
	    color: white;
	    padding: 0.8em 0.7em 0 0.7em;
	    background-color: #607D8B;
	    line-height: 1em;
	    position: relative;
	    left: -1px;
	    top: -4px;
	    height: 1.8em;
	    margin-right: .8em;
	    border-radius: 4px 0 0 4px;
	  }
	`],
	//We have to teach the injector how to make a HeroService by registering a HeroService provider. 
	//The providers array tells Angular to create a fresh instance of the HeroService when it creates a new AppComponent. 
	//The AppComponent can use that service to get heroes and so can every child component of its component tree.
	providers: [HeroService]
})
//export the class to make it available to other components.
export class AppComponent implements OnInit {
	//Start adding stuff here 	
	title = 'Test title';	
	heroes: Hero[];
	selectedHero: Hero;

	// NOT: heroService = new HeroService();
	//The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
	//Now Angular will know to supply an instance of the HeroService when it creates a new AppComponent.
	//https://angular.io/docs/ts/latest/guide/dependency-injection.html
	constructor(private heroService: HeroService) { }

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

}


