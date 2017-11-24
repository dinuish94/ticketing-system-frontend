import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PassengerService {

  private _passengerUrl : string = 'http://localhost:8080/passengers/';
  constructor(private _http: Http) {}

  getCard(cardRef){
    return this._http.get(this._passengerUrl+'visitors/'+cardRef+'/cards')
    .map(res => res.json());
  }

  getTripsForPassenger(token){
    return this._http.get(this._passengerUrl+token+'/trips')
    .map(res => res.json());
  } 

  getTopUpsForPassenger(token){
    return this._http.get(this._passengerUrl+token+'/topups')
    .map(res => res.json());
  }

  getDaypassesForPassenger(token){
    return this._http.get(this._passengerUrl+token+'/daypasses')
    .map(res => res.json());
  }

}
