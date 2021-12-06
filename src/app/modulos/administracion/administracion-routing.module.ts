import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsersComponent } from './usuarios/create-users/create-users.component';
import { EditUsersComponent } from './usuarios/edit-users/edit-users.component';
import { SearchUsersComponent } from './usuarios/search-users/search-users.component';

const routes: Routes = [
  {
    path: "crear-usuario",
    component: CreateUsersComponent
  },
  {
    path: "editar-usuario/:id",
    component: EditUsersComponent
  },
  {
    path: "buscar-usuario",
    component: SearchUsersComponent
  },
  {
    path: "listar-usuarios",
    component: SearchUsersComponent
  },
  {
    path: "eliminar-usuario",
    component: SearchUsersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
