import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  formulario: FormGroup;

  nodata: boolean;
  constructor(private dataUsers: GetdataService,
              private fb       : FormBuilder
              ) { 

    this.nodata = true;
    this.crearFormulario();  
    this.obtenerUsuarios();

  }

  ngOnInit(): void {
  }

  get NombreNoValido(){
    return this.formulario.get('nombre').invalid && this.formulario.get('nombre').touched;
  }
  get apellidoPNoValido(){
    return this.formulario.get('apellidoPaterno').invalid && this.formulario.get('apellidoPaterno').touched;
  }
  get apellidoMNoValido(){
    return this.formulario.get('apellidoMaterno').invalid && this.formulario.get('apellidoMaterno').touched;
  }
  get AliasNoValido(){
    return this.formulario.get('alias').invalid && this.formulario.get('alias').touched;
  }
  get perfilNoValido(){
    return this.formulario.get('perfil').invalid && this.formulario.get('perfil').touched;
  }
  get correoNoValido(){
    return this.formulario.get('correo').invalid && this.formulario.get('correo').touched;
  }
 
  buscarUsuario(){
    console.log("busqueda");
  }

  obtenerUsuarios(){

    this.dataUsers.getUsers().subscribe( resp => this.usuarios = resp);
  }

  guardar(){
    console.log(this.formulario);
  }

  crearFormulario(){

    this.formulario = this.fb.group({
      nombre         : ['',[ Validators.required, Validators.minLength(2)]],
      apellidoPaterno: ['',[ Validators.required, Validators.minLength(2)]],
      apellidoMaterno: ['',[ Validators.required, Validators.minLength(2)]],
      correo         : ['',[ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      alias          : ['',[ Validators.required, Validators.minLength(2)]],
      perfil         : ['',[ Validators.required ]]
    });
  }

  cargarDataAlFormulario(){
    this.formulario.reset({
      nombre: 'Joel'
    })
  }

}
