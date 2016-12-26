import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

import { User } from '../shared/user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private _formBuilder: FormBuilder, private authService: AuthService) { }

    ngOnInit() {
//       this.signupForm = new FormGroup({
//           'username': new FormControl('', Validators.required),
//           'email': new FormControl('', Validators.required),
//           'password': new FormControl('', Validators.required)
 //       });
        this.signupForm = this._formBuilder.group({
            'nickname': ['', [Validators.required, this.customValidator]],
            'firstname': [''],
            'lastname': [''],
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

    onSubmit(user: User) {
        this.authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.signupForm.reset();
    }
}
