import { Component, OnInit } from '@angular/core';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';

@Component({
  selector: 'app-buscar-inmueble',
  templateUrl: './buscar-inmueble.component.html',
  styleUrls: ['./buscar-inmueble.component.css']
})
export class BuscarInmuebleComponent implements OnInit {

  listadoRegistrosInm: ModeloInmueble[] = [];

  constructor(private InmuebleModelo : InmuebleService) { }

  ngOnInit(): void {
    this.ObtenerListadoInmobilario();
  }

  ObtenerListadoInmobilario(){
    this.InmuebleModelo.ObtenerRegistro().subscribe((datos: ModeloInmueble[]) => {
      this.listadoRegistrosInm = datos;
    });
  }

}
