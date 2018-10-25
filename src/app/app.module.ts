import { PessoaModule } from './pessoa/pessoa.module';
import { PessoaService } from './pessoa/pessoa.service';
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
         ConfirmationService
       }from 'primeng/primeng';
import {SidebarModule} from 'primeng/sidebar';
import { HttpModule } from '@angular/http';
import {PRIMENG_IMPORTS} from './primeng-imports';
import { MenuComponent } from './menu.component';
import { TopbarComponent } from './topbar.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import {CardModule} from 'primeng/card';
import { HomeComponent } from './home/home.component';
import {DataViewModule} from 'primeng/dataview';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopbarComponent,
    HomeComponent,
    NavbarComponent,

    
    ],
  imports: [
    ButtonModule,
    CalendarModule,
    InputTextModule,
    DataViewModule,
    BrowserAnimationsModule,
    TableModule,
    CardModule,
    SidebarModule,
    PanelMenuModule,
    BrowserModule,
    routes,
    HttpClientModule,
    HttpModule,
    AccordionModule,
    PRIMENG_IMPORTS,
    
    
  ],
  providers: [ConfirmationService,PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
