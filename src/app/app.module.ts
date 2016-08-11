import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdCardModule } from '@angular2-material/card';

import { AppComponent }     from './app.component'; 

@NgModule({
    declarations:   [AppComponent],
    imports:        [BrowserModule,
                     MdToolbarModule, MdSidenavModule, MdCardModule   ],
    bootstrap:      [AppComponent],
})

export class AppModule {}