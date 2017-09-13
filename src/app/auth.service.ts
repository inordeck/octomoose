import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

/* SERVICES */
/* need to create
import { DataService } './data-storage.service';  */

@Injectable()
export class AuthService {
	baseUrl = 'https://octomoose-b520c.firebaseapp.com/';
	// token returned from firebase
	token: string;
	// user id returned from firebase
	uid: string;
	// email returned from firebase
	email: string;

	//create a new user
	newUser = <any>{ };

	constructor(
		private http: Http,
		private router: Router,
		/* need to create:
		private dataService: DataService*/
	) { }

	// sign up a new user with firebase
	signupUser(email: string, password: string) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(response => {
				this.newUser = response.email;
				console.log("new user is " + this.newUser)
				// authenticate user
				firebase.auth().currentUser.getToken()
					.then(
						(token: string) => this.token = token)
				// route to welcome page
				this.router.navigate(['/welcome']);
			})
			.catch(function(error) {
				return error;
			})
	}

	loginUser(email: string, password: string) {
		console.log('logging user in');
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(
				response => {
					this.uid = response.uid;
					console.log(this.uid);
					this.email = response.email;
					console.log(response.email);
					// get token for authentication
					firebase.auth().currentUser.getToken()
						.then(
							(token: string) => this.token = token)
					// route user to welcome page
					this.router.navigate(['/welcome']);
			})
			.catch(function(error){
				return error;
			});
	}

	getToken() {
		firebase.auth().currentUser.getToken()
			.then(
				(token: string) => this.token = token);
			console.log('calling get token');
			return this.token;
	}

	isAuthenticated() {
		return this.token != null;
	}

	logout() {
		firebase.auth().signOut();
		this.router.navigate(['']);
		this.token = null;
	}

}