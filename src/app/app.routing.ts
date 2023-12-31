import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cv/cv.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { ManageServersComponent } from "./manage-servers/manage-servers.component";
import { MsWordComponent } from "./ms-word/ms-word.component";
import { InfosComponent } from "./infos/infos.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { AllowGuard } from "./allow.guard";
import { DenyGuard } from "./deny.guard";
import { BlockGuard } from "./block.guard";



const myRoutes : Routes = [
    {path : '', component : AccueilComponent},
    {path : 'cv', children : [
        {path : '', component : CvComponent},
        {path : 'add', component : AddComponent, canActivate : [AllowGuard]},
        {path : ':id', component : InfosComponent},
        {path : ':id/edit', component : EditComponent, canActivate : [AllowGuard]},
    ]},
    {path : 'servers', component : ManageServersComponent},
    {path : 'sub', loadChildren : () => import('./sub/sub.module').then(m => m.SubModule)},
    {path : 'ms-word', component : MsWordComponent},
    {path : 'login', component : LoginComponent, canActivate : [DenyGuard], canDeactivate : [BlockGuard]},
    {path : 'not-found', component : NotFoundComponent},
    {path : '**', redirectTo : 'not-found'},
];

export const PLB_ROUTING = RouterModule.forRoot(myRoutes)