import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../services/passenger/passenger.service';
import {TopupService} from '../services/topup/topup.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
  passenger: any =new Array();
  topup: any = new Array;
  
  constructor(private _passengerService: PassengerService, private _topupService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getTripsForPassenger();
    this.getTopUpsForPassenger();
  }

  getTripsForPassenger(){
    this._passengerService.getTripsForPassenger(this.passenger).subscribe(passenger=>{
      this.passenger = passenger;
    })
  }

  getTopUpsForPassenger(){
    this._topupService.getTopUpsForPassenger(this.topup).subscribe(topup=>{
      this.topup = topup;
    })

  }

}
