/*  import {  } from '';  */
import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
	selector: 'lsl-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	title = 'lsl';
	topics: FirebaseListObservable<any[]>;
	user = null;

	constructor(
		private auth: AuthService,
		public db: AngularFireDatabase
	) { }

	ngOnInit() {
		this.auth.getAuthState().subscribe(
			(user) => this.user = user);
		this.topics = this.db.list('/topics');
	}

	loginWithGoogle() {
		this.auth.loginWithGoogle();
	}

	isLoggedIn() {
		return this.auth.isLoggedIn();
	}
}