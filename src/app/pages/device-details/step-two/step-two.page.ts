import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-step-two',
	templateUrl: './step-two.page.html',
	styleUrls: ['./step-two.page.scss', '../device-details.page.scss'],
})
export class StepTwoPage implements OnInit {

	constructor(private router: Router, private fb: FormBuilder) { }

	// touchIssues array
	touchIssuesArray: Array<Object> = [
		{
			val: "sometimes causes problem",
			name: 'touch-issues'
		},
		{
			val: "sometimes stops working",
			name: 'touch-issues'
		},
		{
			val: "yes, working fine",
			name: 'touch-issues'
		}
	]

	// displaySpots array
	displaySpotsArray: Array<Object> = [
		{
			val: "large/heavy visible spots?",
			name: 'display-spots-issue'
		},
		{
			val: "multiple visble spots",
			name: 'display-spots-issue'
		},
		{
			val: "minor/small visible spots",
			name: 'display-spots-issue'
		},
		{
			val: "no spots on screen",
			name: 'display-spots-issue'
		}
	]

	// displayLines array
	displayLinesArray: Array<Object> = [
		{
			val: "monor scratched",
			name: 'display-lines-issue'
		},
		{
			val: "scratched more",
			name: 'display-lines-issue'
		},
		{
			val: "no lines on screen",
			name: 'display-lines-issue'
		}
	]

	// crackedScreen array
	crackedScreenArray: Array<Object> = [
		{
			val: "cracked from top",
			name: 'cracked-screen-issue'
		},
		{
			val: "cracked from left",
			name: 'cracked-screen-issue'
		},
		{
			val: "cracked from right",
			name: 'cracked-screen-issue'
		},
		{
			val: "cracked from bottom",
			name: 'cracked-screen-issue'
		},
		{
			val: "no, just perfect",
			name: 'cracked-screen-issue'
		}
	]

	@ViewChild('stepTwoFORMSubmitBtn', { static: false }) stepTwoFORMSubmitBtn: ElementRef
	// form validations
	stepTwoForm = this.fb.group({
		touchIssues: ["", Validators.required],
		displaySpotsIssues: ["", Validators.required],
		displayLinesIssues: ["", Validators.required],
		crackedScreenIssues: ["", Validators.required],
	})
	// submit form programatically
	submitForm(ev: KeyboardEvent): void {
		ev.preventDefault()
		this.stepTwoFORMSubmitBtn.nativeElement.click()
	}
	handleSubmit(ev: any) {
		ev.preventDefault()
		console.log(this.stepTwoForm.value)
		this.router.navigate(['/device-details/step-three'])
	}

	ngOnInit() {
	}

}
