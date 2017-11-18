import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ChartService {

  constructor(private _http: Http) { }

  loadChartFromStartBusStop(filter: String, startBusStop: number) {
    return this._http.get('http://localhost:8080/charts?filter='+filter+'&startBusStop='+startBusStop).map(
      res => res.json()
    );
  }
}
