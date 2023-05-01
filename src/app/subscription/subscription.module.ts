import { NgModule } from '@angular/core';

import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';



@NgModule({
  declarations: [
    SubscriptionPageComponent,
    SubscriptionDetailsComponent,
  ],
  imports: [
    SubscriptionRoutingModule
  ]
})
export class SubscriptionModule { }
