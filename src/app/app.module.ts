import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AppChartModule } from './chart-module/chart.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { PassengerAccountComponent } from './passenger-account/passenger-account.component';
import { PassengerTopupComponent } from './passenger-topup/passenger-topup.component';

import { PassengerService } from './services/passenger/passenger.service';
import { LoginService } from './login/login.service';
import { AccountService } from './services/account/account.service';
import { DaypassService } from './services/daypass/daypass.service';
import { TopupService } from './services/topup/topup.service';
import { VisitorTopupComponent } from './visitor-topup/visitor-topup.component';
import { PassengerHistoryComponent } from './passenger-history/passenger-history.component';
import { ChartService } from './services/chart/chart.service';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PassengerAccountComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PassengerTopupComponent,
    VisitorTopupComponent,
    PassengerHistoryComponent,
    ChartsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ChartsModule,
    AppChartModule
  ],
  providers: [
    PassengerService,
    LoginService,
    AccountService,
    DaypassService,
    TopupService,
    ChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
