import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router }       from '@angular/router';

import { MdSidenav } from '@angular/material';
import { MdIconRegistry } from '@angular/material';

import { AuthService }    from '../shared/auth.service';

@Component({
  selector: 'app-d4n-root',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  viewProviders: [MdIconRegistry],
  encapsulation: ViewEncapsulation.None,
})

export class LandingPageComponent {

@ViewChild('sidenav') sidenav: MdSidenav;

  isDarkTheme = false;

  constructor(private _router: Router, 
              private authService: AuthService,
              mdIconRegistry: MdIconRegistry,
              sanitizer: DomSanitizer) {
    mdIconRegistry
        .addSvgIconSetInNamespace('core', sanitizer.bypassSecurityTrustResourceUrl('../../assets/core-icon-set.svg'));
  }

  onClick() {
    this._router.navigate(['dashboard', 2]);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
