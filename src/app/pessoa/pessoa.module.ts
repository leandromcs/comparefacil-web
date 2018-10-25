import { PessoaComponent } from './pessoa.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
 import {TableModule} from 'primeng/table';
 import {CardModule} from 'primeng/card';
 import { HttpClientModule } from '@angular/common/http';
import { PessoaService } from './pessoa.service';
import {  pessoaRoute } from './pessoa.route';
import { PessoaFormComponent } from './pessoa.form.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';



@NgModule({
  imports: [
    RouterModule.forChild(pessoaRoute),
    InputTextModule,
    CommonModule,
    ButtonModule,
    CalendarModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    CardModule

  ],
  declarations: [
   PessoaComponent,
   PessoaFormComponent

  ],
  providers: [PessoaService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PessoaModule {}
