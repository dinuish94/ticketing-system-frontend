import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService } from '../../services/chart/chart.service';
import 'pikaday';
import 'moment';

declare const Pikaday: any;
declare const moment: any;

@Component({
  selector: 'app-default-chart',
  templateUrl: './default-chart.component.html',
  styleUrls: ['./default-chart.component.css']
})

export class DefaultChartComponent implements OnInit {
  private chartData: any;
  yesterdayRecords = new Array();
  private yesterdayRecordLabels = new Array();
  private yesterdayRecordData = new Array();

  private SBusStopChartLabels = new Array();
  private SBusStopChartData = new Array();

  private EBusStopChartLabels = new Array();
  private EBusStopChartData = new Array();

  private show = false;
  private selectedMode: string = 'yesterday';

  public blink: string = "";
  public blinko: boolean = false;

  pikaday: any;
  customDate: any = '';

  @ViewChild('datepicker')
  datepicker: ElementRef;

  constructor(private _chartService: ChartService) {

  }

  ngOnInit() {
    this.pikaday = new Pikaday({
      disableWeekends: false,
      field: this.datepicker.nativeElement
    });
    this.loadData();
  }

  loadData(isCustom?) {
    this.show = false;
    this.yesterdayRecords = null;
    this.yesterdayRecordLabels.length = 0;
    this.yesterdayRecordData.length = 0;
    this.SBusStopChartData.length = 0;
    this.SBusStopChartLabels.length = 0;
    this.EBusStopChartData.length = 0;
    this.EBusStopChartLabels.length = 0;
    let param: string;

    if (isCustom) {
      param = this.formatDate();
    } else {
      param = this.selectedMode;
    }

    this._chartService.loadDefaultChart(param).subscribe(data => {
      this.yesterdayRecords = data.yesterdayRecords;

      this.yesterdayRecords.forEach(yesterdayRecord => {
        this.yesterdayRecordLabels.push(yesterdayRecord.date);
        this.yesterdayRecordData.push(yesterdayRecord.count);
      });

      data.startBusStopRecords.forEach(startBusStopRecord => {
        this.SBusStopChartData.push(startBusStopRecord[0]);
        this.SBusStopChartLabels.push(startBusStopRecord[1].location)
      });

      data.endBusStopRecords.forEach(endBusStopRecord => {
        this.EBusStopChartData.push(endBusStopRecord[0]);
        this.EBusStopChartLabels.push(endBusStopRecord[1].location)
      });

      this.show = true;
    });
  }

  public lineChartData: Array<any> = this.yesterdayRecordData;

  public lineChartLabels: Array<any> = this.yesterdayRecordLabels;
  public lineChartType: string = 'line';
  public pieChartType: string = 'pie';

  // Pie
  public pieChartLabels: string[] = this.SBusStopChartLabels;
  public pieChartData: number[] = this.SBusStopChartData;
  public colours = [{
    backgroundColor: ['#77bdfd','#e7cfec','#ffebba','#ffcfc3'],
    hoverBackgroundColor: '#03396c'
  }]
  public colours1 = [{
    backgroundColor: ['#58e7c7','#e7cfec','#ffebba','#ffcfc3'],
    hoverBackgroundColor: '#03396c'
  }]


  public randomizeType(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public showChart(): void {
    this.pieChartType = 'pie';
    this.show = true;
  }

  public blinked() {
    this.blink == 'has-success' ? this.blink = '' : this.blink = 'has-success';
    this.blinko = !this.blinko;

    if (this.blink == 'has-success') {
      setTimeout(() => {
        this.blink = '';
      }, 500);
    }
    console.log(this.blink);
  }

  public blinkIt() {
    return this.blink;
  }

  private formatDate() {
    return moment(this.customDate.substr(4), "MMM DD YYYY").format('YYYY-MM-DD');
  }
}
