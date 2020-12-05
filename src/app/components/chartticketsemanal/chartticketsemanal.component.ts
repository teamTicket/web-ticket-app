import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { GetdataService } from '../../services/getdata.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-chartticketsemanal',
  templateUrl: './chartticketsemanal.component.html',
  styleUrls: ['./chartticketsemanal.component.css']
})
export class ChartTicketSemanalComponent implements OnInit {

 
  
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{
      gridLines: {
        offsetGridLines: true
    }
    }], yAxes: [{

      gridLines: {
        offsetGridLines: true
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
  public barChartLabels: Label[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true; 
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { label: 'Abierto'   , backgroundColor: '#FFDA83', hoverBackgroundColor: '#FFDA83'},
    { label: 'Cerrado'   , backgroundColor: '#56D9FE', hoverBackgroundColor: '#56D9FE'},
    { label: 'Pendientes', backgroundColor: '#FF8373', hoverBackgroundColor: '#FF8373'}
  ];

  constructor(private chartData: GetdataService) {
    // this.barChartData=[
    //   {data: [65, 59, 80, 81, 56, 55, 40]},
    //   {data: [28, 48, 40, 19, 86, 27, 90]},
    //   {data: [28, 48, 40, 19, 86, 27, 90]}
    // ]
    
    chartData.getDataChartSemanal()
    .subscribe( (resp: any[]=[]) => {
      console.log("data semanal 0");
      console.log(resp[0]);
      this.barChartData[0].data = resp[0];
      this.barChartData[1].data = resp[1];
      this.barChartData[2].data = resp[2];
      
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
