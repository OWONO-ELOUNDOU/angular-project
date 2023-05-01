import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'subscription', component: SubscriptionPageComponent },
      { path: 'subscription-details', component: SubscriptionDetailsComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SubscriptionRoutingModule { }
