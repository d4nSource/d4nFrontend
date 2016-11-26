import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router }    from '@angular/router';

import { MdSidenav } from '@angular/material';
import { MdIconRegistry } from '@angular/material';

import { AuthService }    from './shared/auth.service';

@Component({
  selector: 'app-d4n-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  viewProviders: [MdIconRegistry],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {

@ViewChild('sidenav') sidenav: MdSidenav;

  isDarkTheme = false;

  constructor(private _router: Router, private authService: AuthService, mdIconRegistry: MdIconRegistry) {
    mdIconRegistry
        .addSvgIconSetInNamespace('core', '../assets/core-icon-set.svg');
  }

  onClick() {
    this._router.navigate(['dashboard', 2]);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
