import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsersComponent } from './usuarios/create-users/create-users.component';
import { EditUsersComponent } from './usuarios/edit-users/edit-users.component';

const routes: Routes = [
  {
    path: "crear-usuario",
    component: CreateUsersComponent
  },
  {
    path: "editar-usuario",
    component: EditUsersComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
