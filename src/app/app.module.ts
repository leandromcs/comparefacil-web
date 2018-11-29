import { UtilModule } from './util/util.module';
import { session } from './../environments/session';
import { LogoutComponent } from './modules/login/logout.component';
import { LoginComponent } from './modules/login/login.component';
import { PessoaService } from './modules/pessoa/pessoa.service';
import { HomeComponent } from './modules/home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import { RouterModule, Routes } from '@angular/router';
import {TableModule} from 'primeng/table';
import { PrimeTemplate,
         MenuItemContent,
         ConfirmationService,
         ScrollPanelModule
       } from 'primeng/primeng';
import {SidebarModule} from 'primeng/sidebar';
import { HttpModule } from '@angular/http';
import {PRIMENG_IMPORTS} from './primeng-imports';
import { MenuComponent } from './menu.component';
import { TopbarComponent } from './topbar.component';

import {CardModule} from 'primeng/card';

import {DataViewModule} from 'primeng/dataview';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import {BlockUIModule} from 'primeng/blockui';
import {NgxMaskModule} from 'ngx-mask';
import {DropdownModule} from 'primeng/dropdown';
import { HomeService } from './modules/home/home.service';
import { ComentarioService } from './modules/comentario/comentario.service';
import {RatingModule} from 'primeng/rating';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { LikeService } from './modules/like/like.service';
import { LoginService } from './modules/login/login.service';
import {ToastModule} from 'primeng/toast';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopbarComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    ],
  imports: [
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    DataViewModule,
    TableModule,
    CardModule,
    SidebarModule,
    PanelMenuModule,
    MatButtonModule,
    BrowserModule,
    routes,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    AccordionModule,
    DialogModule,
    BlockUIModule,
    RatingModule,
    ToastModule,
    UtilModule,
    NgxMaskModule.forRoot(),
    PRIMENG_IMPORTS,
    ScrollPanelModule

  ],
  providers: [ConfirmationService, PessoaService, HomeService, ComentarioService, LikeService, LoginService, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
