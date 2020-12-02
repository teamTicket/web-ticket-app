import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/user.model';
import { map } from 'rxjs/operators';
import { TicketModel } from '../models/ticket.model';
import { tick } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  url = "https://ticket-app-69006.firebaseio.com";

  usuario = new UsuarioModel();
  ticket = new TicketModel();

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

  getTickets(){

    return this.http.get(`${this.url}/tickets.json`)
    .pipe( 
     map( resp => this.crearArregloTickets(resp))
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

  private crearArregloTickets(TicketsObj: Object){

    if ( TicketsObj === null){ return [];}

    const tickets: TicketModel[] = [];
      Object.keys( TicketsObj ).forEach ( key => {

        const ticket: TicketModel = TicketsObj[key];
        ticket.id = key;

        tickets.push( ticket );
    });

    return tickets;
  }

}
