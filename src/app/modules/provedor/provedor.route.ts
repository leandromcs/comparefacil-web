import { ProvedorFormComponent } from './provedor.form.component';
import { ProvedorComponent } from './provedor.component';
import {  Routes } from '@angular/router';

export const provedorRoute: Routes = [
  {
    path: '',
    component: ProvedorComponent
  },
  {
    path: 'new',
    component: ProvedorFormComponent
  }
];
