import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-signout',
    templateUrl: 'signout.component.html'
})
export class SignoutComponent implements OnInit {
    constructor( private authService: AuthService, private router: Router) { }

    ngOnInit() { }

    onLogout() {
        this.authService.signout();
        this.router.navigateByUrl('/signin');
    }
}