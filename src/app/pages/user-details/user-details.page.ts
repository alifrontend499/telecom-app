import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from 'src/app/_services/comon/common.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.page.html',
	styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

	constructor(
		public comServ: CommonService,
		public fb: FormBuilder,
		private router: Router
	) { }

	idProofArray: Array<Object> = [
		{
			text: "D/License",
			value: "license"
		},
		{
			text: "Adhar",
			value: "adhar"
		},
		{
			text: "passport",
			value: "passport"
		},
		{
			text: "Other",
			value: "other"
		},
		{
			text: "Not Available",
			value: "notAvailable"
		}
	]


	idProof: string = ""
	sellerPicture: string = ""
	customerAgreement: string = ""
	phoneIMEI: string = ""

	// function for takePictureForIdProof
	takePictureForIdProof(ev: KeyboardEvent): void {
		this.comServ.clickImg().then(res => {
			this.showData = res
			if (res.length) {
				this.idProof = res
			} else {
				this.userDetailsForm.controls['idProof'].setValue("")
			}
		})
	}
	// function for takePictureForSellerPicture
	takePictureForSellerPicture(ev: KeyboardEvent): void {
		this.comServ.clickImg().then(res => {
			this.sellerPicture = res
		})
	}
	// function for takePictureForCustomerAgreement
	takePictureForCustomerAgreement(ev: KeyboardEvent): void {
		this.comServ.clickImg().then(res => {
			this.customerAgreement = res
		})
	}
	// function for takePictureForPhoneIMEI
	takePictureForPhoneIMEI(ev: KeyboardEvent): void {
		this.comServ.clickImg().then(res => {
			this.phoneIMEI = res
		})
	}
	// function to deleteIdProog
	deleteIdProof(ev: KeyboardEvent): void {
		ev.preventDefault()
		this.idProof = ""
		this.userDetailsForm.controls['idProof'].setValue("")
	}
	// function to deleteSellerPicture
	deleteSellerPicture(ev: KeyboardEvent): void {
		ev.preventDefault()
		this.sellerPicture = ""
	}
	// function to deleteCustomerAgreement
	deleteCustomerAgreement(ev: KeyboardEvent): void {
		ev.preventDefault()
		this.customerAgreement = ""
	}
	// function to deletePhoneIMEI
	deletePhoneIMEI(ev: KeyboardEvent): void {
		ev.preventDefault()
		this.phoneIMEI = ""
	}

	showData: any
	// form validations
	userDetailsForm = this.fb.group({
		name: ["", Validators.required],
		userGender: ["", Validators.required],
		userPhoneNumber: ["", Validators.required],
		address: ["", Validators.required],
		purchasePrice: ["", Validators.required],
		userName: ["", Validators.required],
		idProof: ["other", Validators.required],
		assignedTechnicianName: ["", Validators.required]
	})

	@ViewChild('userDetailsFormSubmitBtn', { static: false }) userDetailsFormSubmitBtn: ElementRef

	submitForm(ev: KeyboardEvent): void {
		ev.preventDefault()
		this.userDetailsFormSubmitBtn.nativeElement.click()
	}

	handleSubmit(ev: any) {
		ev.preventDefault()
		if (
			(this.userDetailsForm.valid) &&
			(this.idProof.length >= 1) &&
			(this.sellerPicture.length >= 1) &&
			(this.customerAgreement.length >= 1) &&
			(this.phoneIMEI.length >= 1)
		) {
			this.router.navigate(['/otp'])
		}
	}

	ngOnInit() {
		setTimeout(() => {
			this.userDetailsForm.controls['idProof'].setValue("")
		}, 1000)
	}

}
