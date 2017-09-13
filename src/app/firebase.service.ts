import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ApikeyService } from './apikey.service'; /* need to create */

@Injectable()

export class FirebaseService {
	firebaseInitialize = false;
	private firebaseService = new Subject<any>();

	constructor (private apiKeyService: ApiKeyService) { }
	
	startFirebase(): Observable<any> {
		console.log('starting firebase');

		if (!this.firebaseInitialize) {
			console.log('initiqalizing firebase');
			this.firebaseInitialize = true;
			firebase.initializeApp({
				apiKey: process.env.firebaseApiKey || this.apiKeyService.firebaseApiKey,
				authDomain: process.env.firebaseAuthDomain || this.apiKeyService.firebaseAuthDomain
			});
		}

		return this.firebaseService.asObservable();
	}
}
