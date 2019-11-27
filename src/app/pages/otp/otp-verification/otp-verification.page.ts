import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonInput, Platform } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-otp-verification',
	templateUrl: './otp-verification.page.html',
	styleUrls: ['./otp-verification.page.scss', '../otp.page.scss'],
})
export class OtpVerificationPage implements OnInit {
	constructor(
		public plt: Platform,
		public storage: Storage,
		public fb: FormBuilder
	) { }
	mobileIcon: string = "assets/images/icons/icon-otp-mobile.png"
	userPhone: number = 8427145040
	@ViewChild('inputOneField', { static: false }) inputOneField: IonInput
	@ViewChild('inputTwoField', { static: false }) inputTwoField: IonInput
	@ViewChild('inputThreeField', { static: false }) inputThreeField: IonInput
	@ViewChild('inputFourField', { static: false }) inputFourField: IonInput

	handleChangeInputOne(ev: any) {
		if (ev.target.value !== "") {
			this.inputTwoField.setFocus()
		}
	}
	handleChangeInputTwo(ev: any) {
		if (ev.target.value !== "") {
			this.inputThreeField.setFocus()
		}
	}
	handleChangeInputThree(ev: any) {
		if (ev.target.value !== "") {
			this.inputFourField.setFocus()
		}
	}

	otpVerificationForm = this.fb.group({
		fieldOne: ["", Validators.required],
		fieldTwo: ["", Validators.required],
		fieldThree: ["", Validators.required],
		fieldFour: ["", Validators.required],
	})

	ngOnInit() {
		this.plt.ready().then(() => {
			this.storage.set('name', "Ali")
		})
	}

}
