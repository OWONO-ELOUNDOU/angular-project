import { NgModule } from '@angular/core';

import { ActivityListComponent } from './activity-list/activity-list.component';
import { SharedModule } from '../shared/shared.module';
import { ActivityRoutingModule } from './activity-routing.module';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    ActivityListComponent,
    FormComponent
  ],
  imports: [
    SharedModule,
    ActivityRoutingModule,
  ]
})
export class ActivityModule { }
