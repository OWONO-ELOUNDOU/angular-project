import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PartnerComponent } from './partner/partner.component';
import { DohoneComponent } from './dohone/dohone.component';
import { DohoneCallbackComponent } from './dohone-callback/dohone-callback.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'cart', component: CartComponent },
    { path: 'partnership', component: PartnerComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'app', pathMatch: 'full' },
    { path: 'pay/with/dohone', component: DohoneComponent },
    { path: 'dohone/notify/callback', component: DohoneCallbackComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
