import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { GetdataService } from '../../services/getdata.service';

@Component({
  selector: 'app-chartticketmensual',
  templateUrl: './chartticketmensual.component.html',
  styleUrls: ['./chartticketmensual.component.css']
})
export class ChartticketmensualComponent implements OnInit {

  private rutaDataMensual: string ='/datacharts/mensual.json';
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
    { data: [], label: 'Abierto'   , backgroundColor: '#FFDA83', hoverBackgroundColor: '#FFDA83'},
    { data: [], label: 'Cerrado'   , backgroundColor: '#56D9FE', hoverBackgroundColor: '#56D9FE'},
    { data: [], label: 'Pendientes', backgroundColor: '#FF8373', hoverBackgroundColor: '#FF8373'}
  ];

  constructor(private chartData: GetdataService) { 

    this.chartData.getDataChart(this.rutaDataMensual)
    .subscribe( (datachart: any) => {
      const data_abierto   = datachart.abierto;
      const data_cerrado   = datachart.cerrado;
      const data_pendiente = datachart.pendiente;

      this.barChartData=[
        {data: data_abierto, label: 'Abierto'   , backgroundColor: '#FFDA83', hoverBackgroundColor: '#FFDA83'},
        {data: data_cerrado, label: 'Cerrado'   , backgroundColor: '#56D9FE', hoverBackgroundColor: '#56D9FE'},
        {data: data_pendiente, label: 'Pendientes', backgroundColor: '#FF8373', hoverBackgroundColor: '#FF8373'}
      ]
      });
  }

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
