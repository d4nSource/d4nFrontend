import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup.component';
import { SigninComponent } from './user/signin.component';
import { SignoutComponent } from './user/signout.component';
import { LightsComponent } from './lights/lights.component';

export const routing = RouterModule.forRoot([
    { path: '', component: DashboardComponent},
    { path: 'configurator', loadChildren: './configurator/configurator.module#ConfiguratorModule'}, // lazy loading
    { path: 'dashboard', component: DashboardComponent},
    { path: 'lights', component: LightsComponent},
    { path: 'user', component: UserComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'signout', component: SignoutComponent},
    { path: '**', component: NotFoundComponent}
]);
