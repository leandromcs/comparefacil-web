import { PessoaFormComponent } from './modules/pessoa/pessoa.form.component';
import { PessoaModule } from './modules/pessoa/pessoa.module';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PessoaComponent } from './modules/pessoa/pessoa.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';

// import { LoginComponent } from './login/login.component';
// import { LoginSuccessComponent } from './login-success/login-success.component';
// import { LogoutComponent } from './logout/logout.component';
// import { DiarioErrosComponent } from './diario-erros/diario-erros.component';

 const APP_ROUTES: Routes = [

  { path: '', component: HomeComponent },
  { path: 'pessoa', loadChildren: './modules/pessoa/pessoa.module#PessoaModule'},
  { path: 'provedor', loadChildren: './modules/provedor/provedor.module#ProvedorModule'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
