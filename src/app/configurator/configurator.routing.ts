import { RouterModule, Routes }         from '@angular/router';

import { ConfigratorComponent }         from './configurator.component';

const CONFIGURATOR_ROUTES: Routes = [
    { path: '', component: ConfigratorComponent }
];

export const configuratorRouting = RouterModule.forChild(CONFIGURATOR_ROUTES);