import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  verChartSemanal: boolean;
  verChartMensual: boolean;
  verChartAnual  : boolean;

  chartSeleccionado: string;


  constructor() { 
    this.verChartSemanal   = true;
    this.chartSeleccionado = "Semanal";
  }

  ngOnInit(): void {
  }

  semanalSeleccionado(){
    this.verChartSemanal = true;
    this.verChartMensual = false;
    this.verChartAnual   = false;

    this.chartSeleccionado = "Semanal";

  }
  mensualSeleccionado(){
    this.verChartSemanal = false;
    this.verChartMensual = true;
    this.verChartAnual   = false;

    this.chartSeleccionado = "Mensual";

  }
  anualSeleccionado(){
    this.verChartSemanal = false;
    this.verChartMensual = false;
    this.verChartAnual   = true;

    this.chartSeleccionado = "Anual";

  }
  

}
