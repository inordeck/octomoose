import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ApiKeyService } from './apikey.service';

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
				firebaseApiKey: this.apiKeyService.firebaseApiKey,
				firebaseAuthDomain: this.apiKeyService.firebaseAuthDomain,
				firebaseDatabase: this.apiKeyService.firebaseDatabaseURL
			});
		}

		return this.firebaseService.asObservable();
	}
}