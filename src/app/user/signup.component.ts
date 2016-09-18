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
//       this.signupForm = new FormGroup({
//           'username': new FormControl('', Validators.required),
//           'email': new FormControl('', Validators.required),
//           'password': new FormControl('', Validators.required)
 //       });
        this.signupForm = this._formBuilder.group({
            'username': ['', [Validators.required, this.customValidator]],
            'email': ['', [
                    Validators.required,
                    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
                    ]],
            'password': ['', Validators.required]
        });
     }

     customValidator(control: FormControl): {[s: string]: boolean} {
         // set the condition for an invalid case!!
         if (control.value === 'Administrator') {
             return {invalid: true};
         }
         // otherwise its valid
         return null;
     }

     asyncValidator(control: FormControl): Promise<any> | any {

     }

    onSubmit() {
        console.log(this.signupForm.valid);
    }
}
