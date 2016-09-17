import { RouterModule }  from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { NotFoundComponent }    from './not-found/not-found.component';
import { UserComponent }        from './user/user.component';
import { SignupComponent }      from './user/signup.component';

export const routing = RouterModule.forRoot([
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'user', component: UserComponent},
    { path: 'signup', component: SignupComponent},
    { path: '**', component: NotFoundComponent}
]);


