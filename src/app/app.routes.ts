import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PanierComponent } from './panier/panier.component';
import { RegistrationComponent } from './registration/registration.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { AddModifComponent } from './add-modif/add-modif.component';
import { PaymentComponent } from './payment/payment.component';



export const routes: Routes = [
  { path: 'home-component' , component:HomeComponent,},
  { path: 'login-component' , component:LoginComponent,},
  { path: 'panier-component' , component:PanierComponent,},
  { path: 'registration-component' , component:RegistrationComponent,},
  { path: 'qr-code-component' , component:QrCodeComponent,},
  { path: 'add-modif-component' , component:AddModifComponent},
  { path: 'payment-component', component:PaymentComponent},
  { path: '', redirectTo:'login-component', pathMatch:'full'}
];
