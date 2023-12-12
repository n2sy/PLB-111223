import { RouterModule, Routes } from "@angular/router";
import { HomeServersComponent } from "./home-servers/home-servers.component";
import { InfosServerComponent } from "./infos-server/infos-server.component";
import { EditServerComponent } from "./edit-server/edit-server.component";


const routes : Routes = [
    {path : '', component: HomeServersComponent, children : [
        {path : ':id/:title/:statut', component : InfosServerComponent},
        {path : ':id/edit', component : EditServerComponent}
    ]}
];

export const SUB_MODULE = RouterModule.forChild(routes);