import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TopupService {

  private _topupUrl : string = 'http://localhost:8080/topups/';

  constructor(private _http: Http) {}
  
    addTopup(topp) {
      return this._http.post(this._topupUrl,topp)
      .map(res => res);
    }

    getTopUpsForPassenger(token){
      return this._http.get(this._topupUrl+token) .map(res => res.json());
    }
}
