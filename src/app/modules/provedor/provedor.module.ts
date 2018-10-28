import { ProvedorService } from './provedor.service';
import { provedorRoute } from './provedor.route';
import { ProvedorComponent } from './provedor.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
 import {TableModule} from 'primeng/table';
 import {CardModule} from 'primeng/card';
 import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import {BlockUIModule} from 'primeng/blockui';
import {NgxMaskModule} from 'ngx-mask'
import { ProvedorFormComponent } from './provedor.form.component';



@NgModule({
  imports: [
    RouterModule.forChild(provedorRoute),
    InputTextModule,
    CommonModule,
    ButtonModule,
    CalendarModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    CardModule,
    DialogModule,
    BlockUIModule,
    NgxMaskModule

  ],
  declarations: [
   ProvedorComponent,
   ProvedorFormComponent
  ],
  providers: [ProvedorService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProvedorModule {}
