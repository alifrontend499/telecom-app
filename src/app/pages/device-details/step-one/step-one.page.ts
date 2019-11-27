import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from 'src/app/_services/comon/common.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-step-one',
	templateUrl: './step-one.page.html',
	styleUrls: ['./step-one.page.scss', '../device-details.page.scss'],
})
export class StepOnePage implements OnInit {
	constructor(
		private comServ: CommonService,
		private barcodeScanner: BarcodeScanner,
		private fb: FormBuilder,
		private router: Router
	) { }

	// device modal
	deviceModal: Array<Object> = [
		{ name: 'iphone' },
		{ name: 'samsung' },
		{ name: 'mi' },
		{ name: 'nokia' }
	]
	// device modal
	deviceColor: Array<Object> = [
		{ name: 'black' },
		{ name: 'red' },
		{ name: 'white' },
		{ name: 'gray' }
	]
	// device modal
	deviceStorage: Array<Object> = [
		{ name: '32' },
		{ name: '64' },
		{ name: '128' },
		{ name: '256' }
	]

	mobileImages: Array<string> = []

	// message after image loaded
	imgLoaded(): void {
		this.comServ.showToast("Image added successfully")
	}

	// opening camera clicking image
	clickImage(): void {
		this.comServ.clickImg().then(res => {
			this.mobileImages.push(res)
		})
	}

	// delete image
	deleteImg(id: number): void {
		this.mobileImages.splice(id, 1)
	}

	// scaning barcode
	scanBarcode(ev: KeyboardEvent) {
		this.barcodeScanner.scan().then(barcodeData => {
			if (barcodeData.cancelled !== true && barcodeData.format !== "QR_CODE") {
				// this.stepOneForm.controls['deviceIMEI'].setValue(barcodeData.text)
				this.stepOneForm.patchValue({
					deviceIMEI: barcodeData.text
				})
			}
			if (barcodeData.cancelled) {
				this.comServ.showToast('Operation canceled')
			}
			if (barcodeData.format === "QR_CODE") {
				this.comServ.showToast('Please select barcode of IMEI no.')
			}
		}).catch(err => {
			console.log('Error', err);
		});
	}

	@ViewChild('stepOneFORMSubmitBtn', { static: false }) stepOneFORMSubmitBtn: ElementRef

	// form validations
	stepOneForm = this.fb.group({
		deviceModal: ["samsung", Validators.required],
		deviceColor: ["red", Validators.required],
		deviceStorage: ["32", Validators.required],
		deviceIMEI: ["", Validators.required],
		deviceHasCharger: ["", Validators.required],
		deviceHasEarphone: ["", Validators.required],
		deviceHasWarrenty: ["", Validators.required],
	})
	// submit form programatically
	submitForm(ev: KeyboardEvent): void {
		ev.preventDefault()
		this.stepOneFORMSubmitBtn.nativeElement.click()
	}
	handleSubmit(ev: any) {
		ev.preventDefault()
		// console.log(this.stepOneForm.valid)
		if (this.stepOneForm.valid && this.mobileImages.length >= 1) {
			this.router.navigate(['/device-details/step-two'])
		}
	}
	ngOnInit() {
	}

}
