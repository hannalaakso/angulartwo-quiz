//TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular 
//may need to inject other dependencies into this service.
import { Injectable } from '@angular/core';

import { Note } from './note';
import { NOTES } from './mock-notes';

//The NoteService doesn't have any dependencies at the moment. Add the decorator anyway. It is a "best practice" 
//to apply the @Injectable() decorator ​from the start​ both for consistency and for future-proofing.
@Injectable()
export class NoteService {

	//return results asynchronously
	getNotes(): Promise<Note[]> {
	  return Promise.resolve(NOTES);
	}

	getNote(id: number): Promise<Note> {
	  return this.getNotes()
	             .then(notes => notes.find(note => note.id === id));
	}

	// getPriorityHeroes(): Promise<Hero[]> {

	//   return this.getHeroes()
	//              .then(
	//              	heroes => heroes.find(hero => hero.highPriority === false));
	// }

	getNotesSlowly(): Promise< Note[]> {
	  return new Promise<Note[]>(resolve =>
	    setTimeout(resolve, 2000)) // delay 2 seconds
	    .then(() => this.getNotes());
	}

}
