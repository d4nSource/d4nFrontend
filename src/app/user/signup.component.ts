import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'signup-selector',
    templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
       this.signupForm = new FormGroup({
           'username': new FormControl('Username', Validators.required),
           'email': new FormControl('', Validators.required),
           'password': new FormControl('', Validators.required)
        });
     }

    onSubmit() {
        console.log(this.signupForm.valid);
    }
}
