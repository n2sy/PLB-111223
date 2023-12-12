import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { InfosServerComponent } from './infos-server/infos-server.component';
import { SUB_MODULE } from './sub.routing';



@NgModule({
  declarations: [
    HomeServersComponent,
    EditServerComponent,
    InfosServerComponent
  ],
  imports: [
    CommonModule,
    SUB_MODULE
  ]
})
export class SubModule { }
