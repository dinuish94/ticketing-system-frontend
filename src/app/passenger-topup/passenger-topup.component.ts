import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-topup',
  templateUrl: './passenger-topup.component.html',
  styleUrls: ['./passenger-topup.component.css']
})
export class PassengerTopupComponent implements OnInit {

  currentDate: number;

  constructor() { 
    this.currentDate = Date.now();
  }

  ngOnInit() {
  }

}
