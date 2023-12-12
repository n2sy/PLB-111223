import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cv/cv.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { ManageServersComponent } from "./manage-servers/manage-servers.component";
import { MsWordComponent } from "./ms-word/ms-word.component";
import { InfosComponent } from "./infos/infos.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { NotFoundComponent } from "./not-found/not-found.component";



const myRoutes : Routes = [
    {path : '', component : AccueilComponent},
    {path : 'cv', component: CvComponent, children : [
     //   {path : '', component : CvComponent},
        {path : 'add', component : AddComponent},
        {path : ':id', component : InfosComponent},
        {path : ':id/edit', component : EditComponent},
    ]},
    {path : 'servers', component : ManageServersComponent},
    {path : 'ms-word', component : MsWordComponent},
    {path : 'not-found', component : NotFoundComponent},
    {path : '**', redirectTo : 'not-found'},
];

export const PLB_ROUTING = RouterModule.forRoot(myRoutes)