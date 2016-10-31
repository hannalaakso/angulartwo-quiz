import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Before we can use two-way data binding for form inputs, we need to import the FormsModule package in our Angular module.
//https://angular.io/docs/ts/latest/guide/forms.html#!#ngModel
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';

import { AppRoutingModule }     from './app-routing.module';

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
    DashboardComponent,
  	HeroDetailComponent,
    HeroesComponent
  ],
  //We have to teach the injector how to make a HeroService by registering a HeroService provider. 
  //The providers array tells Angular to create a fresh instance of the HeroService when it creates a new AppComponent. 
  //The AppComponent can use that service to get heroes and so can every child component of its component tree.
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 

}
