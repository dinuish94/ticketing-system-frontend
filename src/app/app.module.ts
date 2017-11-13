import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { PassengerAccountComponent } from './passenger-account/passenger-account.component';
import { PassengerTopupComponent } from './passenger-topup/passenger-topup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PassengerAccountComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PassengerTopupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
