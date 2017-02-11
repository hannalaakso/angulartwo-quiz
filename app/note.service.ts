//TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular 
//may need to inject other dependencies into this service.
import { Injectable } from '@angular/core';

import { Note } from './note';
import { NOTES } from './mock-notes';
import { DATE } from './mock-notes';

//The NoteService doesn't have any dependencies at the moment. Add the decorator anyway. It is a "best practice" 
//to apply the @Injectable() decorator ​from the start​ both for consistency and for future-proofing.
@Injectable()
export class NoteService {

	//return results asynchronously
	getNotes(): Promise<Note[]> {
	  return Promise.resolve(NOTES);
	}

	getDate(): Promise<Date> {
	  return Promise.resolve(DATE);
	}		

	getNote(id: number): Promise<Note> {
	  return this.getNotes()
	             .then(notes => notes.find(note => note.id === id));
	}

	// getPriorityNotes(): Promise<Note> {

	//   return this.getNotes()
	//   				//continue here
	//              .then(
	//              	priorityNotes =>
	//              	(
	//              		var test = Note[];
	//              		for( var i = 0; i < notes.length; i++ ){
	// 					  if( users[ i ].id === 70 ){
	// 					    selectedUser = users[ i ];

	// 					    break;
	// 					  }
	// 					};
	// 				)




	//              	//priorityNotes => priorityNotes.find(note => note.highPriority === true)
	//              );
	// }

	getNotesCount(): Promise<number> {
		return this.getNotes()
				.then(count => Object.keys(count).length);
	}

	getNotesSlowly(): Promise< Note[]> {
	  return new Promise<Note[]>(resolve =>
	    setTimeout(resolve, 2000)) // delay 2 seconds
	    .then(() => this.getNotes());
	}

}
