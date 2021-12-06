import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloDatos } from '../modelos/datos.modelo';
import { ModeloIdentificar } from '../modelos/identificar.modelo';
import { ModeloRol } from '../modelos/Rol.modelo';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000';
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());


  constructor(private http: HttpClient) { 

  }

  VerificarSesionActual(){
    let datos = this.ObtenerInformacion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }

  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }

  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{
      return this.http.post<ModeloIdentificar>(`${this.url}/identificarPersona`, {
        usuario : usuario,
        clave: clave,
      },{
        headers: new HttpHeaders({

        })
      })
  }

  AlmacenarSesion(datos: ModeloIdentificar){
    datos.isIdentificado = true;
    let StringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", StringDatos);
    this.RefrescarDatosSesion(datos);
   }

  ObtenerInformacion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }

  EliminarInfoSesion(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  seHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  ObtenerToken(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos.tk;
    }else{
      return '';
    }
  }

  BuscarRol(Id: string,): Observable<ModeloRol>{
    return this.http.get<ModeloRol>(`${this.url}/rols/${Id}`,{
      headers: new HttpHeaders({
      })
    })
}

}


