import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { GetdataService } from '../../services/getdata.service';

@Component({
  selector: 'app-chartpromedioatencion',
  templateUrl: './chartpromedioatencion.component.html',
  styleUrls: ['./chartpromedioatencion.component.css']
})
export class ChartpromedioatencionComponent implements OnInit {


  dataChart: number[];

  private rutaDataPromedio: string ="/promedio_atencion.json";

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Núm. de Tickets atendido por día', lineTension: 0 },
 
  ];
  public lineChartLabels: Label[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [{}]
    },
    legend:{
      display: false
    }
    
  };
  public lineChartColors: Color[] = [

    { // red
      borderColor: '#A3A0FB',
      pointBackgroundColor: '#FF8373',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private chartData: GetdataService) { 
    this.chartData.getDataChart(this.rutaDataPromedio)
      .subscribe((datachart: any) => {
          const dataRespuesta = datachart.datos;

          this.lineChartData=[
            {data: dataRespuesta, label: 'Núm. de Tickets atendido por día', lineTension: 0}
          ]
      });
  }

  ngOnInit(): void {
  }

}
