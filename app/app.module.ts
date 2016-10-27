import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Before we can use two-way data binding for form inputs, we need to import the FormsModule package in our Angular module.
//https://angular.io/docs/ts/latest/guide/forms.html#!#ngModel
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports: [ 
  	//This array contains the list of external modules used by our application.
  	BrowserModule,
  	//https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngModel
  	FormsModule 
  ],
  declarations: [ 
  	AppComponent, 
  	HeroDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
