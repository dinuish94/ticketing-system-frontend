import { Component, OnInit, DoCheck } from '@angular/core';
import { ChartService } from '../../services/chart/chart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  private chartData;
  private labels = new Array();
  private data = new Array();
  isDataAvailable = false;

  constructor(private _chartService: ChartService) { 
  }

  ngOnInit() {
    this.getChartData();
  }

  getChartData() {
    this._chartService.loadChartFromStartBusStop('passenger',1).subscribe(response => {
      this.chartData = response;

      for(var k in this.chartData) this.labels.push(k);
      for(var k in this.chartData) this.data.push(this.chartData[k]);
      this.isDataAvailable = true;
    });
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = this.labels;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;
 
  public barChartData:any[] = [
    {data: this.data, label: ""}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }


}
