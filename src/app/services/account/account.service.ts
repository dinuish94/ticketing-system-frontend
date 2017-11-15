import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

  private _accountsUrl : string = 'http://localhost:8080/accounts/';

  constructor(private _http: Http) {}
  
    getCard(accountId){
      return this._http.get(this._accountsUrl+accountId+'/cards')
      .map(res => res.json());
    }
  
    getPassenger(accountId){
      return this._http.get(this._accountsUrl+accountId+'/passengers')
      .map(res => res.json());
    }

}
