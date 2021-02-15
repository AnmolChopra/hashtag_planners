import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsLayoutComponent } from './news-layout/news-layout.component';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { RegistrationComponent } from './registration/registration.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { PaymentComponent } from './payment/payment.component';
import { K2kComponent } from './k2k/k2k.component';
import { FirstpageComponent } from './firstpage/firstpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NewsLayoutComponent,
    RegistrationComponent,
    PaymentComponent,
    K2kComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private library : FaIconLibrary)
  {
    library.addIcons(faBars,faTimes);
  }
}
