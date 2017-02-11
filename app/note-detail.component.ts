import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { NoteService } from './note.service';

import { Note } from './note';

@Component({
	//component elements / metadata
  moduleId: module.id,
  selector: 'my-note-detail',
  templateUrl: 'note-detail.component.html',
  styleUrls: [ 'note-detail.component.css' ]
  
})

export class NoteDetailComponent implements OnInit {
	// @Input()
	note: Note;
	date: Date = new Date();

	constructor(
	  private noteService: NoteService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

    //We don't really need a dedicated method to wrap one line. We write it anyway:	
	// getNotes(): void {
	// 	//we're now setting this.notes to a Promise rather than an array of notes.
	// 	//Our callback sets the component's notes property to the array of notes returned by the service. 	
	//    this.noteService.getNotes().then(notes => this.notes = notes);
	// }	

	// ngOnInit(): void {
	// 	this.getNotes();
 //  	}

	ngOnInit(): void {
	  this.route.params.forEach((params: Params) => {
	    let id = +params['id'];
	    this.noteService.getNote(id)
	      .then(note => this.note = note);
	  }); 



	  //this.date = Date();

	 // debugger;


	}

	checkbox(note:Note) {
        note.highPriority = (note.highPriority) ? false : true;
    }

	goBack(): void {
	  this.location.back();
	}
}