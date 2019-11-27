import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-step-four',
	templateUrl: './step-four.page.html',
	styleUrls: ['./step-four.page.scss', '../device-details.page.scss'],
})
export class StepFourPage implements OnInit {

	constructor(
		private fb: FormBuilder,
		private router: Router
	) { }

	faults: Array<Object> = [
		{
			text: "Front camera faulty or not working",
			icon: "assets/images/icons/icon-camera.png",
			inputName: 'frontCameraFault'
		},
		{
			text: "Back camera faulty or not working",
			icon: "assets/images/icons/icon-camera.png",
			inputName: 'backCameraFault'
		},
		{
			text: "Volume button defect",
			icon: "assets/images/icons/icon-volume.png",
			inputName: 'volumeFault'
		},
		{
			text: "Battery faulty or not working",
			icon: "assets/images/icons/icon-battery.png",
			inputName: 'batteryFault'
		},
		{
			text: "Ear speaker not working or faulty",
			icon: "assets/images/icons/icon-speaker.png",
			inputName: 'speakerFault'
		},
		{
			text: "Finger touch sensor faulty or not working",
			icon: "assets/images/icons/icon-fingerprint.png",
			inputName: 'fingerPrintFault'
		},
		{
			text: "Power button faulty or not working",
			icon: "assets/images/icons/icon-power.png",
			inputName: 'powerFault'
		},
		{
			text: "Charging port faulty or not working",
			icon: "assets/images/icons/icon-charging.png",
			inputName: 'chargingFault'
		},
		{
			text: "Wifi not working or faulty",
			icon: "assets/images/icons/icon-wifi.png",
			inputName: 'wifiFault'
		},
		{
			text: "Face sensor faulty or not working",
			icon: "assets/images/icons/icon-face-sensor.png",
			inputName: 'faceSensorFault'
		},
		{
			text: "Mic not working or faulty",
			icon: "assets/images/icons/icon-mic.png",
			inputName: 'micFault'
		},
		{
			text: "Bluetooth faulty or not working",
			icon: "assets/images/icons/icon-blutooth.png",
			inputName: 'blutoothFault'
		}
	]

	@ViewChild('stepFourFORMSubmitBtn', { static: false }) stepFourFORMSubmitBtn: ElementRef
	// form validations
	stepFourForm = this.fb.group({
		frontCameraFault: ["no", Validators.required],
		backCameraFault: ["no", Validators.required],
		volumeFault: ["no", Validators.required],
		batteryFault: ["no", Validators.required],
		speakerFault: ["no", Validators.required],
		fingerPrintFault: ["no", Validators.required],
		powerFault: ["no", Validators.required],
		chargingFault: ["no", Validators.required],
		wifiFault: ["no", Validators.required],
		faceSensorFault: ["no", Validators.required],
		micFault: ["no", Validators.required],
		blutoothFault: ["no", Validators.required],
	})
	// submit form programatically
	submitForm(ev: KeyboardEvent): void {
		ev.preventDefault()
		this.stepFourFORMSubmitBtn.nativeElement.click()
	}
	handleSubmit(ev: any) {
		ev.preventDefault()
		console.log(this.stepFourForm.value)
		this.router.navigate(['/user-details'])
	}
	ngOnInit() {
	}

}
