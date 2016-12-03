import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigratorComponent }  from './configurator.component';
import { configuratorRouting } from './configurator.routing';


@NgModule({
    declarations: [
        ConfigratorComponent
    ],
    imports: [
        CommonModule,               // to use *ngIf in templates
        configuratorRouting
    ]
})
export class ConfiguratorModule {}
