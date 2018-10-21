import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
       

import { PrimeTemplate,
         MenuItemContent, 
         ConfirmationService
       }from 'primeng/primeng';
import {SidebarModule} from 'primeng/sidebar';
import {PRIMENG_IMPORTS} from './primeng-imports';
import { MenuComponent } from './menu.component';
import { TopbarComponent } from './topbar.component';
import { PessoaComponent } from './pessoa/pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopbarComponent,
    PessoaComponent
    ],
  imports: [
    BrowserAnimationsModule,
    SidebarModule,
    PanelMenuModule,
    BrowserModule,
    AppRoutes,
    AccordionModule,
    PRIMENG_IMPORTS,
    
    
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
