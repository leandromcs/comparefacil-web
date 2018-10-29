import { ColaboracaoFormComponent } from './colaboracao.form.component';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';


export const colaboracaoRoute: Routes = [
  {
    path: 'new',
    component: ColaboracaoFormComponent
  }
];
