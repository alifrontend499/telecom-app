import { Component, OnInit } from '@angular/core'
import { CommonService } from 'src/app/_services/comon/common.service'
import { Router } from '@angular/router'


@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	// styleUrls: ['./login.page.scss'],
	styleUrls: ['../scss/auth-styles.scss'],
})
export class LoginPage implements OnInit {
	loginForm: HTMLFormElement = null
	userName: string = ""
	userPassword: string = ""
	constructor(private comServ: CommonService, private router: Router) { }

	ngOnInit() {

	}
	// handle submit for login
	handleSubmit(ev: KeyboardEvent): void {
		// ev.preventDefault()
		const user = 'admin'
		const pass = 'admin'
		const username = this.userName.toLowerCase()
		const password = this.userPassword
		this.comServ.showLoading()
		if (username !== '' && username === user && password !== '' && password === pass) {
			setTimeout(() => {
				this.comServ.hideLoading()
				this.comServ.showToast("Login Successfull!")
				// navigate to device details
				this.router.navigate(['/device-details'])
			}, 1200);
		} else {
			setTimeout(() => {
				this.comServ.hideLoading()
				this.comServ.showIonicToast({
					message: 'invalid Username or Password',
					duration: 3000,
					role: 'cancel',
					color: 'danger',
					cssClass: "app-ionic-toast"
				}).then((res: any) => {
					res.present()
				})
			}, 1300);
		}

	}

	// handle login button click  
	// handleLoginClick(ev: any): void {
	// 	ev.preventDefault()
	// }

}
