import { Routes, RouterModule }  from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';

const appRoutes: Routes = [
    { path: '', component: StartpageComponent }

];

export const appRoutingProviders: any [] = [

];

export const routing = RouterModule.forRoot(appRoutes);
