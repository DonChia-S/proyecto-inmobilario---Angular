import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CreateUsersComponent } from './usuarios/create-users/create-users.component';
import { EditUsersComponent } from './usuarios/edit-users/edit-users.component';
import { DeleteUsersComponent } from './usuarios/delete-users/delete-users.component';
import { SearchUsersComponent } from './usuarios/search-users/search-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearInmuebleComponent } from './inmuebles/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmuebles/editar-inmueble/editar-inmueble.component';
import { BuscarInmuebleComponent } from './inmuebles/buscar-inmueble/buscar-inmueble.component';
import { EliminarInmuebleComponent } from './inmuebles/eliminar-inmueble/eliminar-inmueble.component';
import { SolicitarInmuebleComponent } from './inmuebles/solicitar-inmueble/solicitar-inmueble.component';


@NgModule({
  declarations: [
    CreateUsersComponent,
    EditUsersComponent,
    DeleteUsersComponent,
    SearchUsersComponent,
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    BuscarInmuebleComponent,
    EliminarInmuebleComponent,
    SolicitarInmuebleComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdministracionModule { }
