import { RouterModule }  from '@angular/router';

import { DashboardComponent }    from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routing = RouterModule.forRoot([
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: '**', component: NotFoundComponent}
]);


