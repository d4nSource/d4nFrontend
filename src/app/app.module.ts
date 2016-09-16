import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';

import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { routing }              from './app.routing';

import { MdToolbarModule }      from '@angular2-material/toolbar';
import { MdSidenavModule }      from '@angular2-material/sidenav';
import { MdCardModule }         from '@angular2-material/card';
import { MdButtonModule }       from '@angular2-material/button';
import { MdListModule }         from '@angular2-material/list/list';

import { AppComponent }         from './app.component';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { NotFoundComponent }    from './not-found/not-found.component';
import { UserService }          from './shared/user.service';
import { AuthService }          from './shared/auth.service';
import { UserComponent }        from './user/user.component';

@NgModule({
    imports:        [BrowserModule,
                     routing,
                     FormsModule,
                     HttpModule,
                     MdToolbarModule.forRoot(),
                     MdSidenavModule.forRoot(),
                     MdCardModule.forRoot(),
                     MdButtonModule.forRoot(),
                     MdListModule.forRoot() ],
    declarations:   [DashboardComponent, NotFoundComponent, AppComponent, UserComponent],
    providers:      [UserService, AuthService],
    bootstrap:      [AppComponent]
})

export class AppModule { };
