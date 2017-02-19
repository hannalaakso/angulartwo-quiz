import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from './note';
import { NoteService } from './note.service';

@Component({
	//below are called meta-data
	moduleId: module.id,
    selector: 'my-notes',
    templateUrl: 'notes.component.html',
    //The styleUrls property is an array of style file names (with paths). We could list 
    //multiple style files from different locations if we needed them.
    styleUrls: [ 'notes.component.css' ],
	//We have to teach the injector how to make a NoteService by registering a NoteService provider. 
	//The providers array tells Angular to create a fresh instance of the NoteService when it creates a new AppComponent. 
	//The AppComponent can use that service to get notes and so can every child component of its component tree.
	providers: [NoteService]
})
//export the class to make it available to other components.
export class NotesComponent implements OnInit {
	//Start adding stuff here 	
	notes: Note[];
	selectedNote: Note;

	// NOT: noteService = new NoteService();
	//The parameter simultaneously defines a private noteService property and identifies it as a NoteService injection site.
	//Now Angular will know to supply an instance of the NoteService when it creates a new AppComponent.
	//https://angular.io/docs/ts/latest/guide/dependency-injection.html
	constructor(
		private router: Router,
		private noteService: NoteService) { 
	}

	//We don't really need a dedicated method to wrap one line. We write it anyway:	
	getNotes(): void {
		//we're now setting this.notes to a Promise rather than an array of notes.
		//Our callback sets the component's notes property to the array of notes returned by the service. 	
	   this.noteService.getNotes().then(notes => this.notes = notes);
	}	

	ngOnInit(): void {
		this.getNotes();
  	}

  	onSelect(note: Note): void {
	  this.selectedNote = note;
	}	

	gotoDetail(): void {
	    this.router.navigate(['/detail', this.selectedNote.id]);
	}
}


