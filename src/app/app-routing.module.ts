import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

/* IMPORT COMPONENTS */
import {  } from './';

const routes: Routes = [
	{
		path: '',
		component: 
	},

];

@NgModule({
	imports: [ RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }