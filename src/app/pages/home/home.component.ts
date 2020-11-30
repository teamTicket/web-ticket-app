import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/user.model';
import { GetdataService } from '../../services/getdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: UsuarioModel[] = [];

  verChartSemanal: boolean;
  verChartMensual: boolean;
  verChartAnual  : boolean;

  chartSeleccionado: string;


  constructor(private dataUsers: GetdataService) { 
    this.verChartSemanal   = true;
    this.chartSeleccionado = "Semanal";

    dataUsers.getUsers()
    .subscribe( resp => {
      console.log("usuarios:");
      console.log(resp);
      this.usuarios = resp;
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

  }
  anualSeleccionado(){
    this.verChartSemanal = false;
    this.verChartMensual = false;
    this.verChartAnual   = true;

    this.chartSeleccionado = "Anual";

  }
  

}
