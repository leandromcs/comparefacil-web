import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

 import {PessoaComponent} from '../pessoa/pessoa.component';
 import {TableModule} from 'primeng/table';
 import {CardModule} from 'primeng/card';
 import {DataViewModule} from 'primeng/dataview';


// import {pessoaRoute} from '../pessoa/pessoa.route';



@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    TableModule,
    CardModule,
    DataViewModule


  // RouterModule.forChild(pessoaRoute)
  ],
  declarations: [
   PessoaComponent,
    // UsuarioDetailComponent,
    // UsuarioFormComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
