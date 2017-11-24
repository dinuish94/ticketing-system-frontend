import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'; 
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule, } from '@angular/common';

//login
import { LoginComponent } from './login/login.component';

//Home common to all 
import { HomeComponent } from './home/home.component';

//Passenger components
import { PassengerAccountComponent } from './passenger-account/passenger-account.component';
import { PassengerTopupComponent } from './passenger-topup/passenger-topup.component';
import { ChartsComponent } from './charts/charts.component';
//visitor
import { VisitorTopupComponent } from './visitor-topup/visitor-topup.component';

const routes : Routes = [
    { path : 'login', component : LoginComponent},
    { path : '', redirectTo : 'login', pathMatch : 'full'},
    { path : 'home', component : HomeComponent},
   
    //Passenger Routes
    { path : 'passenger-account/:pid', component : PassengerAccountComponent},
    { path : 'passenger-topup/:pid', component : PassengerTopupComponent},

    //Visitor Routes
    { path : 'visitor-topup/:pid', component : VisitorTopupComponent},

    { path:'charts/:id', component: ChartsComponent}

];
 
@NgModule({
    imports : [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports : [

    ]
})

export class AppRoutingModule{}

