import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HomeComponent } from './home/home.component';
import { K2kComponent } from './k2k/k2k.component';
import { NewsLayoutComponent } from './news-layout/news-layout.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path:"",component: HomeComponent },
  { path:"about", component: AboutComponent},
  { path:"events", component:NewsLayoutComponent},
  { path:"registration", component: RegistrationComponent},
  { path:"payment", component:PaymentComponent},
  { path: "k2k", component:K2kComponent},
  { path:"firstpage",component: FirstpageComponent },
  { path:"**", redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
