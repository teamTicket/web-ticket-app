import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chartticketmensual',
  templateUrl: './chartticketmensual.component.html',
  styleUrls: ['./chartticketmensual.component.css']
})
export class ChartticketmensualComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{
      gridLines: {
        offsetGridLines: false
    }
    }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    legend:{
      display: false,
    },
    layout: {
      padding:{
        top: 25
      }
    }

    
  };
  public barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true; 
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40], label: 'Abierto'   , backgroundColor: '#FFDA83', hoverBackgroundColor: '#FFDA83'},
    { data: [28, 48, 40, 19, 86, 27, 90, 40, 19, 86, 27, 90], label: 'Cerrado'   , backgroundColor: '#56D9FE', hoverBackgroundColor: '#56D9FE'},
    { data: [28, 48, 40, 19, 86, 27, 90, 40, 19, 86, 27, 90], label: 'Pendientes', backgroundColor: '#FF8373', hoverBackgroundColor: '#FF8373'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];
  }
  

}
