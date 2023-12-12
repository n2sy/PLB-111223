import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { InfosServerComponent } from './infos-server/infos-server.component';



@NgModule({
  declarations: [
    HomeServersComponent,
    EditServerComponent,
    InfosServerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubModule { }
