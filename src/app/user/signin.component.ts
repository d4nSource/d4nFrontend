import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';

import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { }

    onSubmit(form: NgForm) {
      const user = {
          email: form.value.email,
          password: form.value.password
      };

      this.authService.signin(user)
        .subscribe(
            data => {
                localStorage.setItem('token', data.token);
                this.router.navigateByUrl('/');
            },
            error => console.error(error)
        );

//        form.reset();
    }
}
