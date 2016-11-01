import { Component } from '@angular/core';

//@Component decorator that associates metadata with the AppComponent component class
@Component({
  //a selector that specifies a simple CSS selector for an HTML element that represents the component.
  selector: 'my-app',
  //a template that tells Angular how to render the component's view.
  template: `
    <h1>{{title}}</h1>
    <!-- Notice the routerLink binding in the anchor tag. 
    We bind the RouterLink directive (another of the RouterModule directives) to a string that tells 
    the router where to navigate when the user clicks the link. 
    Since our link is not dynamic, we define a routing instruction with a one-time binding to our route path. 
    Looking back at the route configuration, we confirm that '/heroes' is the path of the route to the HeroesComponent.
    -->
    <nav>
	    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
	    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
	  </nav>
    <!--  Acts as a placeholder that Angular dynamically fills based on the current router state. -->
    <router-outlet></router-outlet>
  `,
  styleUrls: [ 'app/app.component.css' ]
})

//component class that controls the appearance and behavior of a view through its template. 
//Here, you only have the root component, AppComponent. Since you don't 
//need any application logic in the simple QuickStart example, it's empty.
export class AppComponent {
  title = 'Test app';
}