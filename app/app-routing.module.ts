import { NgModule }             from '@angular/core';
//The Angular router is an external, optional Angular NgModule called RouterModule. The router is a combination
// of multiple provided services (RouterModule), multiple directives (RouterOutlet, 
//RouterLink, RouterLinkActive), and a configuration (Routes).
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

//Pull the routes into a variable. You might export it in future and it clarifies the Routing Module pattern.
const routes: Routes = [
  //route definition
  //https://angular.io/docs/ts/latest/guide/router.html    
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  // typical of Routing Modules: Add RouterModule.forRoot(routes) to imports
	//We use the forRoot method because we're providing a configured router at the root of the application. 
    //The forRoot method gives us the Router service providers and directives needed for routing, 
    //and performs the initial navigation based on the current browser URL. 
  imports: [ RouterModule.forRoot(routes) ],
  //Add RouterModule to exports so that the components in the companion module have access 
  //to Router declarables such as RouterLink and RouterOutlet.
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

//Add module providers for guard services if you have them; there are none in this example.
//typical of Routing Modules: No declarations! Declarations are the responsibility of the companion module.