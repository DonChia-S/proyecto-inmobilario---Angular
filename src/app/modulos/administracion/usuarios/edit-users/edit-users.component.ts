import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import * as cryptoJS from "crypto-js";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  id:string = ""
  fgValidador: FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'apellido': ['',[Validators.required]],
    'documento': ['',[Validators.required]],
    'correo': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'password': ['',[Validators.required]],
    'rolId': ['',[Validators.required]],
  });

  constructor(private fb: FormBuilder, private servicioUsuario: UsuariosService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario();
  }

  BuscarUsuario(){
    this.servicioUsuario.ObtenerRegistroPorId(this.id).subscribe((datos:ModeloUsuario)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellido"].setValue(datos.apellido);
      this.fgValidador.controls["documento"].setValue(datos.documento);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["password"].setValue(datos.password);
      this.fgValidador.controls["rol"].setValue(datos.rolId);
    });
  }

  EditarUsuario(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let documento = this.fgValidador.controls["documento"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let password = this.fgValidador.controls["password"].value;
    let rolId = this.fgValidador.controls["rolId"].value;
    let u = new ModeloUsuario();
    let cifrado = cryptoJS.MD5(password).toString();
    u.id = this.id;
    u.nombre = nombre;
    u.apellido = apellido;
    u.documento = documento;
    u.correo = correo;
    u.telefono = telefono;
    u.password = cifrado;
    u.rolId = rolId;

    this.router.navigate(['/administracion/listar-usuarios']);
    this.servicioUsuario.ActualizarUsuario(u).subscribe((datos: ModeloUsuario)=> {
      alert("Usuario actualizado correctamente");
    }, (error: any) => alert("Datos no validos"));
  }

}
