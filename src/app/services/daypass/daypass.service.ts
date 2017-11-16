import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DaypassService {

  private _dayPassUrl : string = 'http://localhost:8080/daypasses/';

  constructor(private _http: Http) {}
  
    addDayPass(daypass) {
      console.log(daypass);
      return this._http.post(this._dayPassUrl,daypass)
      .map(res => res);
    }
  

}
