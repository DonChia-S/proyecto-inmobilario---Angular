import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloSolicitud } from '../modelos/solicito.modelo';
import { ModeloUsuario } from '../modelos/usuario.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  url = 'http://localhost:3000';
  token : string = '';
  constructor( private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken(); 
  }

  CrearSolicitudes(solicitud: ModeloSolicitud): Observable<ModeloSolicitud>{
    return this.http.post<ModeloSolicitud>(`${this.url}/solicitudes`, solicitud, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
