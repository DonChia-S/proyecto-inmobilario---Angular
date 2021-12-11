import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';


@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css']
})
export class EditarInmuebleComponent implements OnInit {

  id:string = ""
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

  constructor(private fb: FormBuilder, private servicioInmueble: InmuebleService,
    private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarInmueble();
  }

  BuscarInmueble(){
    this.servicioInmueble.ObtenerRegistroPorId(this.id).subscribe((datos:ModeloInmueble)=>{
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["encargado"].setValue(datos.encargado);
      this.fgValidador.controls["foto"].setValue(datos.foto);
      this.fgValidador.controls["telEncargado"].setValue(datos.telEncargado);
      this.fgValidador.controls["tipoInmuebleId"].setValue(datos.tipoInmuebleId);
      this.fgValidador.controls["ofertaId"].setValue(datos.tipoOfertaId);
      this.fgValidador.controls["valor"].setValue(datos.valor);
      this.fgValidador.controls["video"].setValue(datos.video);
    });
  }

  EditarInmueble(){
    let direccion = this.fgValidador.controls["direccion"].value;
    let encargado = this.fgValidador.controls["encargado"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let telEncargado = this.fgValidador.controls["telEncargado"].value;
    let tipoInmuebleId = this.fgValidador.controls["tipoInmuebleId"].value;
    let ofertaId = this.fgValidador.controls["ofertaId"].value;
    let valor = this.fgValidador.controls["valor"].value;
    let video = this.fgValidador.controls["video"].value;
    let i = new ModeloInmueble();
    i.id = this.id;
    i.direccion = direccion;
    i.encargado = encargado;
    i.foto = foto;
    i.telEncargado = telEncargado;
    i.tipoInmuebleId = tipoInmuebleId;
    i.tipoOfertaId = ofertaId;
    i.valor = valor;
    i.video = video;

    this.router.navigate(['/administracion/listar-inmueble']);
    this.servicioInmueble.ActualizarUsuario(i).subscribe((datos: ModeloInmueble)=> {
      alert("Oferta actualizado correctamente");
    }, (error: any) => alert("Datos no validos"));
  }


}
