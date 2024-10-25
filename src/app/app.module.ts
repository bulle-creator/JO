import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { QRCodeModule } from 'angularx-qrcode';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

@NgModule({
  imports: [QRCodeModule],
  providers: [],

  })
  export class AppModule { }

//bootstrapApplication(LoginComponent, {
 // providers: [
   // provideRouter([]),
  //  importProvidersFrom(HttpClientModule)
//  ]
//}).catch(err => console.error(err));
