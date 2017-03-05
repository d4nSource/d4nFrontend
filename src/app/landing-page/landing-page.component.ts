import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { MdSidenav } from '@angular/material';
import { MdIconRegistry } from '@angular/material';

import { AuthService } from '../shared/auth.service';

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

  gradient =  true;
  single: any[] = [
    {
      'name': 'used',
      'value': 200
    },
    {
      'name': 'free',
      'value': 500
    }
  ];

  view: any[] = [50, 50];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private router: Router, private authService: AuthService, mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry
        .addSvgIconSetInNamespace('core', sanitizer.bypassSecurityTrustResourceUrl('../assets/core-icon-set.svg'))
        .addSvgIconInNamespace('assets','appcenter', sanitizer.bypassSecurityTrustResourceUrl('../assets/appcenter.svg'));
  }

  onClick() {
    this.router.navigate(['dashboard', 2]);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  onSelect(event) {
    console.log(event);
  }

}
