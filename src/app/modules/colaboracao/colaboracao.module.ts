import { colaboracaoRoute } from './colaboracao.route';
import { ColaboracaoComponent } from './colaboracao.component';
import { NgxMaskModule } from 'ngx-mask';
import { BlockUIModule } from 'primeng/blockui';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

 import {PessoaComponent} from '../pessoa/pessoa.component';
 import {TableModule} from 'primeng/table';
 import {CardModule} from 'primeng/card';
 import {DataViewModule} from 'primeng/dataview';
import { ColaboracaoFormComponent } from './colaboracao.form.component';
import { ColaboracaoService } from './colaboracao.service';
import {DropdownModule} from 'primeng/dropdown';


// import {pessoaRoute} from '../pessoa/pessoa.route';



@NgModule({
  imports: [
    RouterModule.forChild(colaboracaoRoute),
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
    NgxMaskModule,
    DropdownModule
  ],
  declarations: [
   ColaboracaoComponent,
   ColaboracaoFormComponent
  ],
  providers: [ColaboracaoService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ColaboracaoModule {}
