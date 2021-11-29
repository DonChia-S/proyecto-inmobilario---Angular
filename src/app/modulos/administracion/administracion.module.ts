import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CreateUsersComponent } from './usuarios/create-users/create-users.component';
import { EditUsersComponent } from './usuarios/edit-users/edit-users.component';
import { DeleteUsersComponent } from './usuarios/delete-users/delete-users.component';
import { SearchUsersComponent } from './usuarios/search-users/search-users.component';


@NgModule({
  declarations: [
    CreateUsersComponent,
    EditUsersComponent,
    DeleteUsersComponent,
    SearchUsersComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
