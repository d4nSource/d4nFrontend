import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';

import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { routing }              from './app.routing';

import { FlexLayoutModule }     from '@angular/flex-layout';
import { MaterialModule }       from '@angular/material';
import { NgxChartsModule }      from '@swimlane/ngx-charts';

import { LandingPageComponent }         from './landing-page/';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { NotFoundComponent }    from './not-found/not-found.component';
import { UserService }          from './shared/user.service';
import { AuthService }          from './shared/auth.service';
import { UserComponent }        from './user/user.component';
import { SignupComponent, SigninComponent, SignoutComponent }      from './user/';
import { LightsComponent } from './lights/lights.component';

@NgModule({
    imports: [                              // adds other modules (packages)
        BrowserModule,
        routing,
        FormsModule,                        // to use template driven forms
        ReactiveFormsModule,                // to use model driven forms
        HttpModule,
        NgxChartsModule,                    // Ngx Charts
        MaterialModule.forRoot(),           // module for all Material2 components
        FlexLayoutModule.forRoot(),         // Flex Layout Directives
    ],
    declarations: [                         // adds components, pipes
        DashboardComponent,
        NotFoundComponent,
        LandingPageComponent,
        UserComponent,
        SignupComponent,
        SigninComponent,
        SignoutComponent,
        LightsComponent
    ],
    providers: [UserService, AuthService],  // adds services to the whole app
    bootstrap: [LandingPageComponent]               // start component
})

export class AppModule { };
