import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/user.model';
import { GetdataService } from '../../services/getdata.service';

@Component({
  selector: 'app-card-usuarios',
  templateUrl: './card-usuarios.component.html',
  styleUrls: ['./card-usuarios.component.css']
})
export class CardUsuariosComponent implements OnInit {

  usuarios: UsuarioModel[] = [];
  constructor(private dataUsers: GetdataService) {
    this.obtenerUsuarios();
  }

  ngOnInit(): void {
  }

  private obtenerUsuarios() {
    
    this.dataUsers.getUsers()
    .subscribe( resp => {
      this.usuarios = resp;
    });
  }
}
