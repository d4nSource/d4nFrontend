import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';

import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { routing }              from './app.routing';

import { MaterialModule }       from '@angular/material';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { NotFoundComponent }    from './not-found/not-found.component';
import { UserService }          from './shared/user.service';
import { AuthService }          from './shared/auth.service';
import { UserComponent }        from './user/user.component';
import { SignupComponent }      from './user/signup.component';

@NgModule({
    imports: [                              // adds other modules (packages)
        BrowserModule,
        routing,
        FormsModule,
        ReactiveFormsModule,                // to use model driven forms
        HttpModule,
        MaterialModule.forRoot()            // module for all Material2 components
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
