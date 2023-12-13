import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ItemComponent } from './item/item.component';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { DirectComponent } from './direct/direct.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ShortPipe } from './pipes/short.pipe';
import { FiltrePipe } from './pipes/filtre.pipe';
import { NoAvatarPipe } from './pipes/no-avatar.pipe';
import { FirstService } from './services/first.service';
import { SecondService } from './services/second.service';
import { RecruesComponent } from './recrues/recrues.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PLB_ROUTING } from './app.routing';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { addTokenInterceptor } from './add-token.interceptor';
import { AllowGuard } from './allow.guard';
import { DenyGuard } from './deny.guard';
import { BlockGuard } from './block.guard';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    CvComponent,
    ItemComponent,
    ListeComponent,
    DetailsComponent,
    DirectComponent,
    AddAccountComponent,
    HomeAccountComponent,
    ItemAccountComponent,
    MsWordComponent,
    ManageServersComponent,
    CustomDirDirective,
    ShortPipe,
    FiltrePipe,
    NoAvatarPipe,
    RecruesComponent,
    AccueilComponent,
    InfosComponent,
    AddComponent,
    EditComponent,
    NotFoundComponent,
    NavbarComponent,
    LoginComponent,
    ReactFormComponent
  ],
  imports: [
  BrowserModule, CommonModule, FormsModule, PLB_ROUTING, ReactiveFormsModule, HttpClientModule
  ],
  providers: [FirstService, SecondService, provideHttpClient(withInterceptors([addTokenInterceptor])), AllowGuard, DenyGuard, BlockGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
