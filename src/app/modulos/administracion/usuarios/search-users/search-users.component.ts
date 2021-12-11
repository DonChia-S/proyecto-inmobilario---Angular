import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  listadoRegistros: ModeloUsuario[] = [];

  constructor(private usuarioServicio : UsuariosService) { }

  ngOnInit(): void {
    this.ObtenerListadoUsuario();
  }

  ObtenerListadoUsuario(){
    this.usuarioServicio.ObtenerRegistro().subscribe((datos: ModeloUsuario[]) => {
      this.listadoRegistros = datos;
    });
  }
}
