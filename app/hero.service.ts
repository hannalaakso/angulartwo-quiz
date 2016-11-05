//TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular 
//may need to inject other dependencies into this service.
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//The HeroService doesn't have any dependencies at the moment. Add the decorator anyway. It is a "best practice" 
//to apply the @Injectable() decorator ​from the start​ both for consistency and for future-proofing.
@Injectable()
export class HeroService {

	//return results asynchronously
	getHeroes(): Promise<Hero[]> {
	  return Promise.resolve(HEROES);
	}

	getHero(id: number): Promise<Hero> {
	  return this.getHeroes()
	             .then(heroes => heroes.find(hero => hero.id === id));
	}

	// getPriorityHeroes(): Promise<Hero[]> {

	//   return this.getHeroes()
	//              .then(
	//              	heroes => heroes.find(hero => hero.highPriority === false));
	// }

	getHeroesSlowly(): Promise<Hero[]> {
	  return new Promise<Hero[]>(resolve =>
	    setTimeout(resolve, 2000)) // delay 2 seconds
	    .then(() => this.getHeroes());
	}

}
