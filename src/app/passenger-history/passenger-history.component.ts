import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassengerService } from '../services/passenger/passenger.service';
import {TopupService} from '../services/topup/topup.service';
import { AccountService } from '../services/account/account.service';


@Component({
  selector: 'app-passenger-history',
  templateUrl: './passenger-history.component.html',
  styleUrls: ['./passenger-history.component.css']
})
export class PassengerHistoryComponent implements OnInit {

  accountId: number;
  cardRef : String;
  topups :any[];
  trips : any[];
  daypasses : any[];
  // trips : any[] = [
  //   {
  //     id : "45",
  //     current_balance : 566,
  //     distance:7,
  //     iscompleted : false,
  //     payWithCash : 0,
  //     paymentDone : true,
  //     price : 77.12,
  //     rate :12

  //   }
  // ];

  constructor(private _passengerService: PassengerService, private _topupService:TopupService,private _accountService: AccountService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.accountId = params['pid'];
    })

    this.getCard();
    
  }

  getCard(): void {
    this._accountService.getCard(this.accountId).subscribe(card => {
      this.cardRef = card.cardRef;
      console.log(card);
      return this.getTopUpsForPassenger();
    });
  }

  getTripsForPassenger(){
    this._passengerService.getTripsForPassenger(this.cardRef).subscribe(trips=>{
      this.trips = trips;
      console.log(this.trips);  
      return this.getDaypassesForPassenger() 
    })
  }

  getTopUpsForPassenger(){
    this._passengerService.getTopUpsForPassenger(this.cardRef).subscribe(topups=>{
      this.topups = topups;
      console.log(this.topups);
      return this.getTripsForPassenger();
    })

  }

  getDaypassesForPassenger(){
    this._passengerService.getDaypassesForPassenger(this.cardRef).subscribe(daypasses=>{
      this.daypasses = daypasses;
      console.log(this.daypasses);
    })

  }

}
