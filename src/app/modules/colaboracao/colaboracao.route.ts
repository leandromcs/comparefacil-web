import { ColaboracaoFormComponent } from './colaboracao.form.component';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { AvaliarColaboracaoDetail } from './colaboracao-adm/avalia-colaboracao/avaliar-colaboracao.detail';
import { AvaliarColaboracaoComponent } from './colaboracao-adm/avalia-colaboracao/avaliar-colaboracao.component';


export const colaboracaoRoute: Routes = [
  {
    path: 'new',
    component: ColaboracaoFormComponent
  },
  {
    path: 'avaliar',
    component: AvaliarColaboracaoComponent
  },
  {
    path: ':id/avaliar',
    component: AvaliarColaboracaoDetail
  }
];
