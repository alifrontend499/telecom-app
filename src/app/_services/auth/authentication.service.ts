import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	authenticationState = new BehaviorSubject(false)
	constructor(private storage: Storage, private plt: Platform) { }

	login(userName: string) {
		return this.storage.set()
	}
	logout() {

	}
	isAuthenticated() {

	}
	checkToken() {

	}

}
