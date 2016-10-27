import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
	//component elements / metadata
  selector: 'my-hero-detail',
  template:
  `<!-- 
	ngIf and ngFor are called “structural directives” because they can change the structure of portions of the DOM. 
	https://angular.io/docs/ts/latest/guide/structural-directives.html
	-->
	<div *ngIf="hero">
	    <h2>{{hero.name}} details!</h2>
	    <div><label>id: </label>{{hero.id}}</div>	   
    	<div>
		    <label>name: </label>
		    <!-- Two way binding 
		    The parenthesis identify the <li> element’s click event as the target. The expression 
		    to the right of the equal sign calls the AppComponent method, onSelect(), passing the 
		    template input variable hero as an argument. That’s the same hero variable we 
		    defined previously in the ngFor
		    https://angular.io/docs/ts/latest/guide/user-input.html
		    -->
		    <input [(ngModel)]="hero.name" placeholder="name"/>
  		</div> 
	</div> `
})

export class HeroDetailComponent {
	@Input()
	hero: Hero;
}