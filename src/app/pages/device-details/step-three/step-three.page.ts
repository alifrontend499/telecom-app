import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-step-three',
    templateUrl: './step-three.page.html',
    styleUrls: ['./step-three.page.scss', '../device-details.page.scss'],
})
export class StepThreePage implements OnInit {

    constructor(private router: Router, private fb: FormBuilder) { }
    // dentsOnPhone Array
    dentsOnPhoneArray: Array<Object> = [
        {
            val: "cracked or broken side panel",
            name: 'sel-val'
        },
        {
            val: "cracked or broken back panel",
            name: 'sel-val'
        },
        {
            val: "cracked or broken middle body",
            name: 'sel-val'
        },
        {
            val: "missing side panel",
            name: 'sel-val'
        },
        {
            val: "missing back panel",
            name: 'sel-val'
        },
        {
            val: "no panel defect",
            name: 'sel-val'
        }
    ]
    // backPanelIssues array
    backPanelIssuesArray: Array<Object> = [
        {
            val: "cracked or broken back panel",
            name: 'sel-val'
        },
        {
            val: "missing back panel",
            name: 'sel-val'
        },
        {
            val: "no back panel defect",
            name: 'sel-val'
        }
    ]

    // bodyLines array
    bodyLinesArray: Array<Object> = [
        {
            val: "minor scratched",
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
    // bentPhone array
    bentPhoneArray: Array<Object> = [
        {
            val: "little bent",
            name: 'display-lines-issue'
        },
        {
            val: "no bent problem",
            name: 'display-lines-issue'
        }
    ]

    @ViewChild('stepThreeFORMSubmitBtn', { static: false }) stepThreeFORMSubmitBtn: ElementRef
    // form validations
    stepThreeForm = this.fb.group({
        dentsOnPhoneIssues: ["", Validators.required],
        backPanelIssuesIssues: ["", Validators.required],
        bodyLinesIssues: ["", Validators.required],
        bentPhoneIssues: ["", Validators.required],
    })
    // submit form programatically
    submitForm(ev: KeyboardEvent): void {
        ev.preventDefault()
        this.stepThreeFORMSubmitBtn.nativeElement.click()
    }
    handleSubmit(ev: any) {
        ev.preventDefault()
        console.log(this.stepThreeForm.value)
        this.router.navigate(['/device-details/step-four'])
    }

    ngOnInit() {
    }

}
