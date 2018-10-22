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
import {PRIMENG_IMPORTS} from './primeng-imports';
import { MenuComponent } from './menu.component';
import { TopbarComponent } from './topbar.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import {CardModule} from 'primeng/card';
import { HomeComponent } from './home/home.component';
import {DataViewModule} from 'primeng/dataview';
import {MDCTextField} from '@material/textfield';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopbarComponent,
    PessoaComponent,
    HomeComponent,
    
    ],
  imports: [
    MDCTextField,
    DataViewModule,
    BrowserAnimationsModule,
    TableModule,
    CardModule,
    SidebarModule,
    PanelMenuModule,
    BrowserModule,
    routes,
    AccordionModule,
    PRIMENG_IMPORTS,
    
    
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
