import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { HttpModule }  from '@angular/http';

import { MdToolbarModule }  from '@angular2-material/toolbar';
import { MdSidenavModule }  from '@angular2-material/sidenav';
import { MdCardModule }     from '@angular2-material/card';
import { MdButtonModule }   from '@angular2-material/button';


import { AppComponent }                 from './app.component'; 
import { routing, appRoutingProviders } from './app.routing';

import { StartpageComponent }   from './startpage/startpage.component';

@NgModule({
    imports:        [BrowserModule,
                     routing,
                     HttpModule,
                     MdToolbarModule, MdSidenavModule, MdCardModule, MdButtonModule   ],
    declarations:   [AppComponent,
                     StartpageComponent],
    providers:      [appRoutingProviders],
    bootstrap:      [AppComponent]
})

export class AppModule { }