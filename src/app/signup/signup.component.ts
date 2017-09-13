import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import * as firebase from 'firebase';
/* SERVICES */
import { ApiKeyService } from '../apikey.service';
/* need to create
import { DataService } from '../data-storage.service'; */
import { FirebaseService } from '../firebase.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	subscription: Subscription;
	newUser = <any>{ };
	photo: string;
	message: any;
	firebaseError;

	constructor(
		private firebaseService: FirebaseService, 
		private authService: AuthService,
		/* need to create 
		private dataService: DataService,*/
		private apiKeyService: ApiKeyService
	) { 
		this.subscription = this.firebaseService.startFirebase().subscribe(
			message => {
				this.message = message;
		});
	}


  ngOnInit() {
  }

  onSignup(newUser) {
  	console.log('new user is ' + newUser);
  	const email = newUser.email;
  	const password = newUser.password;
  	this.authService.signupUser(email, password);
  	/* need to create data service
  	this.dataService.storeUser(email)
  		.subscribe(response => {
  			console.log('json response is: ' + response.json());
  		})*/
  }

}