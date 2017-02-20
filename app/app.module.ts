import { NgModule }      from '@angular/core';
//Since the QuickStart application is a web application that runs in a browser, your root 
//module needs to import the BrowserModule from @angular/platform-browser to the imports array.
import { BrowserModule } from '@angular/platform-browser';
// Before we can use two-way data binding for form inputs, we need to import the FormsModule package in our Angular module.
//https://angular.io/docs/ts/latest/guide/forms.html#!#ngModel
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { QuizComponent }   from './components/quiz/quiz.component';
import { SelectionComponent } from './components/selection/selection.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { SummaryComponent } from './components/summary/summary.component';
import { NoteDetailComponent } from './old-modules/note-detail.component';
import { NotesComponent }     from './old-modules/notes.component';
import { NoteService }         from './old-modules/note.service';

import { AppRoutingModule }     from './app-routing.module';

//Every Angular application has at least one module: the root module, named AppModule here.
//This is the entry point to your application.
@NgModule({
  imports: [ 
  	//This array contains the list of external modules used by our application.
  	BrowserModule,
  	//https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngModel
  	FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
  	AppComponent, 
    QuizComponent,
    SelectionComponent,
    QuestionComponent,
    AnswerComponent,
    SummaryComponent,
  	NoteDetailComponent,
    NotesComponent
  ],
  //We have to teach the injector how to make a NoteService by registering a NoteService provider. 
  //The providers array tells Angular to create a fresh instance of the NoteService when it creates a new AppComponent. 
  //The AppComponent can use that service to get notes and so can every child component of its component tree.
  providers: [
    NoteService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 

}
