import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../services/passenger/passenger.service';
import { ActivatedRoute } from '@angular/router';

import { AccountService } from '../services/account/account.service';


@Component({
  selector: 'app-passenger-account',
  templateUrl: './passenger-account.component.html',
  styleUrls: ['./passenger-account.component.css']
})
export class PassengerAccountComponent implements OnInit {
  passenger: any;
  accountId: number;

  constructor(private _accountService: AccountService, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.accountId = params['pid'];
    })
    this.getPassenger();
  }

  getPassenger(): void {
    this._accountService.getPassenger(this.accountId).subscribe(passenger => {
      this.passenger = passenger;
      console.log(passenger);
    });
  }
}
