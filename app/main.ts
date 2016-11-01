//see systemjs.config.js

//Because the QuickStart application runs directly in the browser, main.ts imports the platformBrowserDynamic function 
//from @angular/platform-browser-dynamic, not @angular/core. On a mobile device, you might load a module with 
//Apache Cordova or NativeScript, using a bootstrap function that's specific to that platform.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

//initializes the platform that your application runs in, then uses the platform to bootstrap your AppModule.

//Why create separate main.ts, app module and app component files?
//App bootstrapping is a separate concern from creating a module or presenting a view. Testing the component is 
//much easier if it doesn't also try to run the entire application.
platformBrowserDynamic().bootstrapModule(AppModule);
