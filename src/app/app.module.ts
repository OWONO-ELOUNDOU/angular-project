import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import  localeFr from '@angular/common/locales/fr';
import { BnNgIdleService } from 'bn-ng-idle';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ActivityModule } from './prestations/activity.module';
import { SliderComponent } from './Image-slider/slider/slider.component';
import { SubscriptionModule } from './subscription/subscription.module';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
import { AuthModule } from './Auth/auth.module';
import { FreeModule } from './free_services/free.module';
import { environment } from 'src/environments/environment';
import { PartnerComponent } from './partner/partner.component';
import { AboutComponent } from './about/about.component';
import { DohoneComponent } from './dohone/dohone.component';
import { DohoneCallbackComponent } from './dohone-callback/dohone-callback.component';

// Import Firebase modules + environment
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

registerLocaleData(localeFr, 'fr');

const config =  {
   projectId: 'windows-237',
   appId: '1:749432239695:web:143c73bead105b620d5c3a',
   databaseURL: 'https://windows-237-default-rtdb.europe-west1.firebasedatabase.app',
   storageBucket: 'windows-237.appspot.com',
   locationId: 'europe-west',
   apiKey: 'AIzaSyCpXsBXNgViqQB-UOwpw_NWuzcXLR4B7ng',
   authDomain: 'windows-237.firebaseapp.com',
   messagingSenderId: '749432239695',
 }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    SliderComponent,
    CartComponent,
    DashboardComponent,
    MessageComponent,
    PartnerComponent,
    AboutComponent,
    DohoneComponent,
    DohoneCallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ActivityModule,
    AppRoutingModule,
    AuthModule,
    FreeModule,
    SubscriptionModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
