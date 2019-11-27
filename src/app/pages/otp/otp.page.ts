import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-otp',
	templateUrl: './otp.page.html',
	styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

	constructor(
		private router: Router
	) { }

	@ViewChild("otpForm", { static: false }) otpForm: NgForm
	mobileIcon: string = "assets/images/icons/icon-otp-mobile.png"

	// submit form
	handleSubmit(ev: any) {
		if (this.otpForm.valid) {
			this.router.navigate(['otp/otp-verification'])
		} else {
			ev.preventDefault()
		}
	}
	ngOnInit() {
	}

}
