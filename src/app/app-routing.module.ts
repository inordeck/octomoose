/* import {  } from './'; */

import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

/* IMPORT COMPONENTS */
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'signup', component: SignupComponent }
];
	console.log('route it beyotch!');


@NgModule({
	imports: [ RouterModule.forRoot(appRoutes)],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }