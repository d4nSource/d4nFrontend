import { Component } from '@angular/core';

import { Router }    from '@angular/router';

@Component({
  selector: 'd4n-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  constructor(private _router: Router) {

  }

  onClick() {
    this._router.navigate(['dashboard', 2]);
  }
}
