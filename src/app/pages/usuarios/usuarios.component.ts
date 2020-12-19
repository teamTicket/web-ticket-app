import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/user.model';
import { GetdataService } from '../../services/getdata.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: UsuarioModel[] = [];
  tipoUsuario: string = "Administradores";

  constructor(private dataUsers: GetdataService) { 

    dataUsers.getUsers()
    .subscribe( resp => {
      this.usuarios = resp;
    });
  }

  ngOnInit(): void {
  }

  buscarUsuario(){
    console.log("busqueda");
  }
}
