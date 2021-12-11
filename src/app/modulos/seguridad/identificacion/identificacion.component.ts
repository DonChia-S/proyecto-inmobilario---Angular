import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";
import { Router } from '@angular/router';


@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'usuario' : ['', [Validators.required, Validators.email]],
    'clave' : ['', [Validators.required]]

  })

  constructor(private fb: FormBuilder,
    private servicioSeguridad : SeguridadService,
    private router : Router) { }

  ngOnInit(): void {
  }
  
  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      // console.log(this.servicioSeguridad.BuscarRol(d.rol))
      this.servicioSeguridad.BuscarRol(datos.datos.rol).subscribe((d:any)=>{
        if(d.nombre == 'admin'){
          this.router.navigate(['/administracion/buscar-usuario'])
        }else if(d.nombre == 'asesor'){
          this.router.navigate(['/administracion/listar-inmueble'])
          alert('bienvenido asesor')
        }else if(d.nombre == 'cliente'){
          this.router.navigate(['/administracion/solicitar-inmueble'])
          alert('bienvenido cliente')
        }else{
          alert("Este usuario no tiene rol")
        }
      })
    }, (error: any) =>{
      alert("Datos invalidos")
    })
  }

}
