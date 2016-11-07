import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: [ 'app/dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  //Define a heroes array property.
  notes: Note[] = [];

  //Inject the NoteService in the constructor and hold it in a private noteService field.
  constructor(
    private router: Router,
    private noteService: NoteService) { 
  }

  //Call the service to get heroes inside the Angular ngOnInit lifecycle hook.
  ngOnInit(): void {
    this.noteService.getNotes()
        //Cherry-pick four heroes (2nd, 3rd, 4th, and 5th)
      .then(notes => this.notes = notes.slice(1, 5));
   }


  // getPriorityHeroes(): void {
  //   //we're now setting this.heroes to a Promise rather than an array of heroes.
  //   //Our callback sets the component's heroes property to the array of heroes returned by the service.   
  //    this.noteService.getPriorityHeroes().then(heroes => this.heroes = heroes);
  // }  

  // ngOnInit(): void {
  //   this.getPriorityHeroes();
  // }

  gotoDetail(note: Note): void {
    let link = ['/detail', note.id];
    this.router.navigate(link);
  }
}