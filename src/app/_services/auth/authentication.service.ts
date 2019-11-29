import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	authenticationState = new BehaviorSubject(false)
	TOKEN_KEY: string = 'auth-token'
	constructor(private storage: Storage, private plt: Platform) {
		this.plt.ready().then(() => {
			this.checkToken()
		})
	}

	async login(userName: string) {
		if (userName) {
			return await this.storage.set(this.TOKEN_KEY, `BEARER.${userName}`).then((res: any) => {
				this.authenticationState.next(true)
			})
		}
	}

	async logout() {
		return await this.storage.remove(this.TOKEN_KEY).then(() => {
			this.authenticationState.next(false)
		})
	}

	isAuthenticated() {
		return this.authenticationState.value
	}

	async checkToken() {
		return await this.storage.get(this.TOKEN_KEY).then((res: any) => {
			if (res) {
				this.authenticationState.next(true)
			}
		})
	}

}
