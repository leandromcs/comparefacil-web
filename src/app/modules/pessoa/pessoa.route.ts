import { PessoaComponent } from './pessoa.component';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { PessoaFormComponent } from './pessoa.form.component';
import { PessoaDetailComponent } from './pessoa.detail.component';

export const pessoaRoute: Routes = [
  {
    path: '',
    component: PessoaComponent,
  },
  {
    path: 'new',
    component: PessoaFormComponent
  },
  {
    path: ':id/view',
    component: PessoaDetailComponent
  },
  {
    path: ':id/edit',
    component: PessoaFormComponent
  }
];
