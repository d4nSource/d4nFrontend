import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';

import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { routing }              from './app.routing';

import { MdToolbarModule }      from '@angular2-material/toolbar';
import { MdSidenavModule }      from '@angular2-material/sidenav';
import { MdCardModule }         from '@angular2-material/card';
import { MdButtonModule }       from '@angular2-material/button';
import { MdListModule }         from '@angular2-material/list/list';
import { MdInputModule }        from '@angular2-material/input';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { NotFoundComponent }    from './not-found/not-found.component';
import { UserService }          from './shared/user.service';
import { AuthService }          from './shared/auth.service';
import { UserComponent }        from './user/user.component';
import { SignupComponent }      from './user/signup.component';

@NgModule({
    imports: [                          // adds other modules (packages)
        BrowserModule,
        routing,
        FormsModule,
        ReactiveFormsModule,            // to use model driven forms
        HttpModule,
        MdToolbarModule.forRoot(),
        MdSidenavModule.forRoot(),
        MdCardModule.forRoot(),
        MdButtonModule.forRoot(),
        MdListModule.forRoot(),
        MdCardModule.forRoot(),
        MdInputModule.forRoot()         // adds md-input directives
    ],
    declarations: [                         // adds components, pipes
        DashboardComponent,
        NotFoundComponent,
        AppComponent,
        UserComponent,
        SignupComponent
    ],
    providers: [UserService, AuthService],  // adds services to the whole app
    bootstrap: [AppComponent]               // start component
})

export class AppModule { };
