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

	constructor(
	  private noteService: NoteService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	ngOnInit(): void {
	  this.route.params.forEach((params: Params) => {
	    let id = +params['id'];
	    this.noteService.getNote(id)
	      .then(note => this.note = note);
	  });
	}

	checkbox(note:Note) {
        note.highPriority = (note.highPriority) ? false : true;
    }

	goBack(): void {
	  this.location.back();
	}
}