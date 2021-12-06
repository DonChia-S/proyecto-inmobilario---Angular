import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'apellido': ['',[Validators.required]],
    'documento': ['',[Validators.required]],
    'correo': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'rolId': ['',[Validators.required]],
  });

  constructor(private fb: FormBuilder, private servicioUsuario: UsuariosService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  GuardarUsuario(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let documento = this.fgValidador.controls["documento"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let rolId = this.fgValidador.controls["rolId"].value;
    let u = new ModeloUsuario();
    u.nombre = nombre;
    u.apellido = apellido;
    u.documento = documento;
    u.correo = correo;
    u.telefono = telefono;
    u.rolId = rolId;

    this.router.navigate(['/administracion/listar-usuarios']);
    this.servicioUsuario.CrearUsuario(u).subscribe((datos: ModeloUsuario)=> {
      alert("Usuario creado correctamente");
    }, (error: any) => alert("Datos no validos"));
  }

}
