import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label, } from 'ng2-charts';
import { GetdataService } from '../../services/getdata.service';

@Component({
  selector: 'app-chartclientes',
  templateUrl: './chartclientes.component.html',
  styleUrls: ['./chartclientes.component.css']
})
export class ChartClientesComponent implements OnInit {

  public rutaDataClientes: string = '/clientes.json';
 // Doughnut
public doughnutChartLabels: Label[] = ['Platino', 'VIP', 'Intermedio', 'Base'];

public doughnutChartData: ChartDataSets[] = [
  { data: [], backgroundColor: ['#55D8FE', '#FF8373', '#FFDA83', '#A3A0FB'], hoverBackgroundColor: ['#55D8FE', '#FF8373', '#FFDA83', '#A3A0FB']}
];
 public doughnutChartOptions: ChartOptions = {
  responsive: true,
  legend:{
    position: "right"
  }
 }
 public doughnutChartType: ChartType = 'doughnut';

 constructor(private chartData: GetdataService) { 

  this.chartData.getDataChart(this.rutaDataClientes)
  .subscribe( (datachart: any) => {
    const data_chart  = datachart.datos;

    this.doughnutChartData=[
      { data: data_chart, backgroundColor: ['#55D8FE', '#FF8373', '#FFDA83', '#A3A0FB'], hoverBackgroundColor: ['#55D8FE', '#FF8373', '#FFDA83', '#A3A0FB']}
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
}
