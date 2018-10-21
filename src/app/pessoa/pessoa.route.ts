import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { PessoaComponent } from './pessoa.component';

export const pessoaRoute: Routes = [
  {
    path: '',
    component: PessoaComponent
  }
];
