import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InmuebleService } from 'src/app/servicios/inmueble.service';

@Component({
  selector: 'app-eliminar-inmueble',
  templateUrl: './eliminar-inmueble.component.html',
  styleUrls: ['./eliminar-inmueble.component.css']
})
export class EliminarInmuebleComponent implements OnInit {

  constructor(private servicioInmobiliario: InmuebleService,
    private router: Router, private route: ActivatedRoute) { }
 
  id:string = ""

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.EliminiarUsuario();
  }


  EliminiarUsuario(){
    let r = confirm("¿Enserio quiere eliminiar este inmueble?");
    if (r == true) {
      this.servicioInmobiliario.EliminarUsuario(this.id).subscribe((datos: any)=> {
        alert("Usuario eliminado correctamente");
      }, (error: any) => alert("Datos no validos"));
      this.router.navigate(['/administracion/listar-inmueble']);
    } else {
      this.router.navigate(['/administracion/listar-inmueble']);
    }
  }

}
