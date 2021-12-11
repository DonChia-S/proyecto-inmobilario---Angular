import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloDatos } from 'src/app/modelos/datos.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {

  constructor(private servicioUsuario: UsuariosService,
    private router: Router, private route: ActivatedRoute) { }
 
  id:string = ""

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.EliminiarUsuario();
  }


  EliminiarUsuario(){
    let r = confirm("¿Enserio quiere eliminiar este usuario?");
    if (r == true) {
      this.servicioUsuario.EliminarUsuario(this.id).subscribe((datos: any)=> {
        alert("Usuario eliminado correctamente");
      }, (error: any) => alert("Datos no validos"));
      this.router.navigate(['/administracion/listar-usuarios']);
    } else {
      this.router.navigate(['/administracion/listar-usuarios']);
    }
  }

}
