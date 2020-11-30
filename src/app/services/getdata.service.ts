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
   
    return this.http.get(`${this.url}/users.json`)
            .pipe( 
             map( resp => this.crearArreglo(resp))
            );
   }

  private crearArreglo(UsuariosObj: Object){

    if ( UsuariosObj === null){ return [];}

    const usuarios: UsuarioModel[] = [];
      Object.keys( UsuariosObj ).forEach ( key => {

        const usuario: UsuarioModel = UsuariosObj[key];
        usuario.id = key;

        usuarios.push( usuario );
    });

    return usuarios;
  }
}
