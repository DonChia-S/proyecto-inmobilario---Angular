import { Component, OnInit } from '@angular/core';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { ModeloSolicitud } from 'src/app/modelos/solicito.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';
import { SolicitudesService } from 'src/app/servicios/solicitudes.service';

@Component({
  selector: 'app-solicitar-inmueble',
  templateUrl: './solicitar-inmueble.component.html',
  styleUrls: ['./solicitar-inmueble.component.css']
})
export class SolicitarInmuebleComponent implements OnInit {

  listadoRegistrosInm: ModeloInmueble[] = [];

  constructor(private servicioInmueble: InmuebleService, private servicioSolicitud: SolicitudesService) { }

  ngOnInit(): void {
    this.ObtenerListadoInmobilario();
  }

  ObtenerListadoInmobilario(){
    this.servicioInmueble.ObtenerRegistro().subscribe((datos: ModeloInmueble[]) => {
      this.listadoRegistrosInm = datos;
    });
  }

  CrearSolicitud(idInmueble?: string) {
    let s = new ModeloSolicitud();
    let c = JSON.parse(`${localStorage.getItem("datosSesion")}`);
    s.idcliente = c.datos.id;
    s.comentario = "envio solicitud"
    s.inmuebleId = idInmueble;
    s.idasesor = '61a96b6079add52d5c6f7ce4';
    s.estadosId = '61b4ea0216b82008fc3e83ae';
    console.log(s)

    this.servicioSolicitud.CrearSolicitudes(s).subscribe((datos: ModeloSolicitud)=>{
      alert('Su solicitud ha sido enviada')
    }, (error: any) => alert("Datos no validos"))
}

}
