import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarInmuebleComponent } from './inmuebles/buscar-inmueble/buscar-inmueble.component';
import { CrearInmuebleComponent } from './inmuebles/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmuebles/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmuebles/eliminar-inmueble/eliminar-inmueble.component';
import { SolicitarInmuebleComponent } from './inmuebles/solicitar-inmueble/solicitar-inmueble.component';
import { CreateUsersComponent } from './usuarios/create-users/create-users.component';
import { DeleteUsersComponent } from './usuarios/delete-users/delete-users.component';
import { EditUsersComponent } from './usuarios/edit-users/edit-users.component';
import { SearchUsersComponent } from './usuarios/search-users/search-users.component';

const routes: Routes = [
  {
    path: "crear-usuario",
    component: CreateUsersComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editar-usuario/:id",
    component: EditUsersComponent,
    
  },
  {
    path: "buscar-usuario",
    component: SearchUsersComponent,
    
  },
  {
    path: "listar-usuarios",
    component: SearchUsersComponent,
    
  },
  {
    path: "eliminar-usuario/:id",
    component: DeleteUsersComponent,
    
  },
  {
    path: "crear-inmueble",
    component: CrearInmuebleComponent,
    
  },
  {
    path: "editar-inmueble/:id",
    component: EditarInmuebleComponent,
    
  },
  {
    path: "listar-inmueble",
    component: BuscarInmuebleComponent,
    
  },
  {
    path: "eliminar-inmueble/:id",
    component: EliminarInmuebleComponent,
    
  },
  {
    path: "solicitar-inmueble",
    component: SolicitarInmuebleComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
