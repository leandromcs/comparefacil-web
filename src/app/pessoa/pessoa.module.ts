import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


 import {PessoaComponent} from '../pessoa/pessoa.component';

 import {pessoaRoute} from '../pessoa/pessoa.route';



@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
   RouterModule.forChild(pessoaRoute),
  ],
  declarations: [
   PessoaComponent,
    // UsuarioDetailComponent,
    // UsuarioFormComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PessoaModule {}
