import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloInmueble } from '../modelos/inmueble.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  url = 'http://localhost:3000';
  token : string = '';
  constructor( private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken(); 
  }

  ObtenerRegistro(): Observable<ModeloInmueble[]>{
    return this.http.get<ModeloInmueble[]>(`${this.url}/inmuebles`)
  }

  ObtenerRegistroPorId(id: string): Observable<ModeloInmueble>{
    return this.http.get<ModeloInmueble>(`${this.url}/inmuebles/${id}`)
  }

  CrearUsuario(usuario: ModeloInmueble): Observable<ModeloInmueble>{
    return this.http.post<ModeloInmueble>(`${this.url}/inmuebles`, usuario, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarUsuario(usuario: ModeloInmueble): Observable<ModeloInmueble>{
    return this.http.put<ModeloInmueble>(`${this.url}/inmuebles/${usuario.id}`, usuario, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarUsuario(id: string): Observable<any>{
    return this.http.delete(`${this.url}/inmuebles/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
