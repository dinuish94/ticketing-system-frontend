import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Topup } from '../models/topup.model';
import { DayPass } from '../models/daypass.model';
import { PassengerService } from '../services/passenger/passenger.service';
import { AccountService } from '../services/account/account.service';
import { DaypassService } from '../services/daypass/daypass.service';
import { TopupService } from '../services/topup/topup.service';

@Component({
  selector: 'app-visitor-topup',
  templateUrl: './visitor-topup.component.html',
  styleUrls: ['./visitor-topup.component.css']
})
export class VisitorTopupComponent implements OnInit {

  currentDate: number;
  showDayPassDiv: boolean = false;
  showNormalDiv: boolean = true;
  newTopup: Topup = new Topup();
  newDayPass: DayPass = new DayPass();
  card : any = new Object;
  isInvalidTopup : boolean = true;
  isInvalidPass : boolean = true;

  constructor(private _passengerService:PassengerService,private _daypassService: DaypassService, private _topupService: TopupService, private _accountService: AccountService, private _route: ActivatedRoute) {
    this.currentDate = Date.now();
  }

  ngOnInit() {
  }


  validateTopupCard(input){
    return this.getCardTopup()
  }

  getCardTopup() : void{
    if(this.newTopup.cardRef==null || this.newTopup.cardRef ==""){
      this.isInvalidTopup = true;
      return;
    }
    this._passengerService.getCard(this.newTopup.cardRef).subscribe(card=>{
      this.card= card;
      console.log(this.card);
      if(this.card.cardRef == null){
        this.isInvalidTopup = true;
      }
      else{
        this.isInvalidTopup = false;
      }
    })
  }


  validatePass(input){
    return this.getCardPass()
  }

  getCardPass() : void{
    if(this.newDayPass.cardRef==null || this.newDayPass.cardRef ==""){
      this.isInvalidPass = true;
      return;
    }
    this._passengerService.getCard(this.newDayPass.cardRef).subscribe(card=>{
      this.card= card;
      console.log(this.card);
      if(this.card.cardRef == null){
        this.isInvalidPass = true;
      }
      else{
        this.isInvalidPass = false;
      }
    })
  }


  activateDayPass(): void {
    this.showDayPassDiv = true;
    this.showNormalDiv = false;
  }

  activateTopup(): void {
    this.showDayPassDiv = false;
    this.showNormalDiv = true;
  }

  addCredit(): void {
    console.log(this.newTopup);
    if (this.newTopup.amount == null || this.newTopup.cardRef == null) {
      swal(
        'Invalid Fields!',
        'Your Amount is Empty',
        'error'
      )
      return;
    }

    swal({
      title: 'Are you sure?',
      text: 'Your payment will be confirmed!',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Proceed!',
      cancelButtonText: 'Cancel!'
    }).then(() => {
      this._topupService.addTopup(this.newTopup).subscribe(() => {
        swal({
          title: 'Success',
          text: 'Transaction was Success!',
          type: 'success',
          showCancelButton: false,
          confirmButtonText: 'OK'
        }).then(() => {
          window.location.reload();
        })
      });

    }, function (dismiss) {
      // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      if (dismiss === 'cancel') {
      }
    })
  }

  addDayPass(): void {
    console.log(this.newDayPass);

    if (this.newDayPass.cardRef == null || this.newDayPass.passDate == null) {
      swal(
        'Invalid Fields!',
        'Your Date is Empty',
        'error'
      )
      return;
    }

    swal({
      title: 'Are you sure?',
      text: 'Your payment will be confirmed!',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Proceed!',
      cancelButtonText: 'Cancel!'
    }).then(() => {
      this._daypassService.addDayPass(this.newDayPass).subscribe(() => {
        swal({
          title: 'Success',
          text: 'Transaction was Success!',
          type: 'success',
          showCancelButton: false,
          confirmButtonText: 'OK'
        }).then(() => {
          window.location.reload();
        })
      });

    }, function (dismiss) {
      // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      if (dismiss === 'cancel') {
      }
    })
  }

}
