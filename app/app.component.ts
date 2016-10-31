import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
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
    <router-outlet></router-outlet>
  `,
  styleUrls: [ 'app/app.component.css' ]
})

export class AppComponent {
  title = 'Test app';
}