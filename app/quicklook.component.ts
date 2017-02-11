import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'my-quicklook',
  templateUrl: 'app/quicklook.component.html',
  styleUrls: [ 'app/quicklook.component.css' ]
})

export class QuicklookComponent implements OnInit {

  //Define a notes array property.
  notes: Note[] = [];
  //notes: Note[];
  count: number;
  priorityNotes: Note[];
  date: Date = new Date();

  //Inject the NoteService in the constructor and hold it in a private noteService field.
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

  //Call the service to get notes inside the Angular ngOnInit lifecycle hook.
  ngOnInit(): void {

    var that = this;

   this.noteService.getNotes().then(
     notes => that.notes = notes     
   );

   this.noteService.getNotes().then(function(notes) {

      for( var i = 0; i < that.notes.length; i++ ){
        if( that.notes[ i ].highPriority === true ){
          that.priorityNotes[i] = that.notes[ i ];
                    //break;
        }
      };        // do whatever with res here
    });

   this.noteService.getDate().then(date => this.date = date);



   this.priorityNotes = this.notes.filter(

          note => note.highPriority === true
          );

    // this.noteService.getNotes()
    //     //Cherry-pick four notes (2nd, 3rd, 4th, and 5th)
    //   .then(notes => this.notes = notes.slice(1, 5));

    // this.noteService.getPriorityNotes()
    //   .then(priorityNotes => this.priorityNotes = priorityNotes);

    this.noteService.getNotesCount()
      .then(count => this.count = count);

      //var test = Note[];
      
   }

   // debugger;

   //    for( var i = 0; i < this.notes.length; i++ ){
   //      debugger;
   //      if( this.notes[ i ].highPriority === true ){
   //        this.priorityNotes[i] = this.notes[ i ];
   //        debugger;
   //                  //break;
   //      }
   //    };  


  // getPriorityNotes(): void {
  //   //we're now setting this.notes to a Promise rather than an array of notes.
  //   //Our callback sets the component's notes property to the array of notes returned by the service.   
  //    this.noteService.getPriorityNotes().then(notes => this.notes = notes);
  // }  

  // ngOnInit(): void {
  //   this.getPriorityNotes();
  // }

  gotoDetail(note: Note): void {
    let link = ['/detail', note.id];
    this.router.navigate(link);
  }
}