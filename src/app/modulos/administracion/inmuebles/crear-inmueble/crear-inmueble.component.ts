import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';


@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {
  
  fgValidador: FormGroup = this.fb.group({
    'direccion': ['',[Validators.required]],
    'valor': ['',[Validators.required]],
    'encargado': ['',[Validators.required]],
    'telEncargado': ['',[Validators.required]],
    'foto': ['',[Validators.required]],
    'video': ['',[Validators.required]],
    'tipoInmuebleId': ['',[Validators.required]],
    'ofertaId': ['',[Validators.required]],
  });

  constructor(private fb: FormBuilder, private servicioImboliario: InmuebleService,
    private router: Router) { }


  ngOnInit(): void {
  }

  GuardarInmobilaria(){
    let direccion = this.fgValidador.controls["direccion"].value;
    let valor = this.fgValidador.controls["valor"].value;
    let encargado = this.fgValidador.controls["encargado"].value;
    let telEncargado = this.fgValidador.controls["telEncargado"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let video = this.fgValidador.controls["video"].value;
    let tipoInmuebleId = this.fgValidador.controls["tipoInmuebleId"].value;
    let ofertaId = this.fgValidador.controls["ofertaId"].value;
    let i = new ModeloInmueble();
    i.direccion = direccion;
    i.encargado = encargado;
    i.foto = foto;
    i.telEncargado = telEncargado;
    i.tipoInmuebleId = tipoInmuebleId;
    i.tipoOfertaId = ofertaId;
    i.valor = valor;
    i.video = video;

    this.router.navigate(['/administracion/listar-inmueble']);
    this.servicioImboliario.CrearUsuario(i).subscribe((datos: ModeloInmueble)=> {
      alert("Oferta creado correctamente");
    }, (error: any) => alert("Datos no validos"));
  }

}

