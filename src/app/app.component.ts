import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { InventoryComponent } from './inventory';

@Component({
  selector: 'd4n-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  directives: [
    MD_SIDENAV_DIRECTIVES, 
    MD_TOOLBAR_DIRECTIVES, 
    MD_BUTTON_DIRECTIVES, 
    MD_CARD_DIRECTIVES
  ]
})

export class AppComponent {

  title = 'app works!';
}
