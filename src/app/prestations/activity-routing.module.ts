import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ActivityListComponent } from './activity-list/activity-list.component';
import { FormComponent } from './form/form.component';




@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'activity', component: ActivityListComponent },
      { path: 'form/:id/:Id', component: FormComponent },
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class ActivityRoutingModule { }
