import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-chartclientes',
  templateUrl: './chartclientes.component.html',
  styleUrls: ['./chartclientes.component.css']
})
export class ChartClientesComponent implements OnInit {

 // Doughnut
 public doughnutChartLabels: Label[] = ['Platino', 'VIP', 'Intermedio', 'Base'];
//  public doughnutChartData: MultiDataSet = [
//    [350, 450, 100,30] 
  
//  ];
public doughnutChartData: ChartDataSets[] = [
  { data: [65,29,30,60], backgroundColor: ['#55D8FE', '#FF8373', '#FFDA83', '#A3A0FB'], hoverBackgroundColor: ['#55D8FE', '#FF8373', '#FFDA83', '#A3A0FB']}
];
 public doughnutChartOptions: ChartOptions = {
  responsive: true,
  legend:{
    position: "right"
  }
 }
 public doughnutChartType: ChartType = 'doughnut';

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
}
