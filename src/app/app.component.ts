import { Component } from '@angular/core';

import { Router }    from '@angular/router';

import { AuthService }    from './shared/auth.service';

@Component({
  selector: 'app-d4n-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  constructor(private _router: Router, private authService: AuthService) {

  }

  onClick() {
    this._router.navigate(['dashboard', 2]);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
