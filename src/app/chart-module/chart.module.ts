import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DefaultChartComponent } from './default-chart/default-chart.component';

import { ChartService } from '../services/chart/chart.service';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule
  ],
  declarations: [
    LineChartComponent,
    BarChartComponent,
    DefaultChartComponent
  ],
  exports: [
    LineChartComponent,
    BarChartComponent,
    DefaultChartComponent
  ],
  providers: [
    ChartService
  ]
})
export class AppChartModule { }
