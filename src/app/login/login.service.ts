import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private _http: Http) {}
  
    authUser(user){
      return this._http.post('http://localhost:8080/login/',user)
      .map(res => res.json());
    }

}
