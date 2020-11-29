import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/user.model';
import { ChartTicketModel } from '../models/chartticket.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  url = "https://ticket-app-69006.firebaseio.com";


  chartData: string[];

  usuario = new UsuarioModel();

  constructor(private http: HttpClient) {}

  getDataChartSemanal(){
   
    return this.http.get(`${this.url}/chartticketsemanal.json`);
   }
  getUsers(){
   
    return this.http.get(`${this.url}/users.json`);
            // .pipe( 
            //  map( resp => this.crearArreglo(resp))
            // );
   }

//  private crearArreglo(chartSemanalObj: Object){

//    if ( chartSemanalObj === null){ return [];}

//   const chartsdatas: ChartTicketModel[] = [];
//   Object.keys( chartSemanalObj ).forEach ( key => {
//     const chartdata: ChartTicketModel = chartSemanalObj[key];

//     chartsdatas.push( chartdata );
//   });

//   return chartsdatas;
//   }
}
