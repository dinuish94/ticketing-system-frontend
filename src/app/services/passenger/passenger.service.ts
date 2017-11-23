import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PassengerService {

  //tripList=[];
  private _passengerUrl : string = 'http://localhost:8080/passengers/';
  constructor(private _http: Http) {}

  getCard(cardRef){
    return this._http.get(this._passengerUrl+'visitors/'+cardRef+'/cards')
    .map(res => res.json());
  }

  // getTripsForPassenger(token){
  //   this.tripList=[];

  //   return new Promise((resolve,reject)=>{
  //      	this._http.get(this._passengerUrl+token).flatMap(res => res.json()).subscribe(
  //      	response => {
  //      	this.tripList.push(response);
  //      	resolve(this.tripList);
  //      	}
  //      	);
  //      	});    
  // }

  getTripsForPassenger(token){
    return this._http.get(this._passengerUrl+token) .map(res => res.json());
  } 
}
