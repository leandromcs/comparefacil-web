import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// import { LoginComponent } from './login/login.component';
// import { LoginSuccessComponent } from './login-success/login-success.component';
// import { LogoutComponent } from './logout/logout.component';
// import { DiarioErrosComponent } from './diario-erros/diario-erros.component';

export const routes: Routes = [
  { path: 'pessoa', loadChildren: 'app/pessoa/pessoa.module#PessoaModule' },
  
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
