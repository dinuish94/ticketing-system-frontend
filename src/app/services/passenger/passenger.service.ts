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

}
