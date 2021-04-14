import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket.model';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-chart-tickets',
  templateUrl: './chart-tickets.component.html',
  styleUrls: ['./chart-tickets.component.css']
})
export class ChartTicketsComponent implements OnInit {

 
  tickets: TicketModel[] = [];

  verChartSemanal: boolean;
  verChartMensual: boolean;
  verChartAnual  : boolean;

  chartSeleccionado: string;


  constructor(private dataUsers: GetdataService) { 
    this.verChartSemanal   = true;
    this.chartSeleccionado = "Semanal";

    dataUsers.getTickets()
    .subscribe( resp => {
      this.tickets = resp;
    });
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
    console.log('mensual');
  }
  anualSeleccionado(){
    this.verChartSemanal = false;
    this.verChartMensual = false;
    this.verChartAnual   = true;

    this.chartSeleccionado = "Anual";

  }
  
}
