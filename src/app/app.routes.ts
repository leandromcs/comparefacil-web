import { PessoaModule } from './pessoa/pessoa.module';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PessoaComponent } from './pessoa/pessoa.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// import { LoginComponent } from './login/login.component';
// import { LoginSuccessComponent } from './login-success/login-success.component';
// import { LogoutComponent } from './logout/logout.component';
// import { DiarioErrosComponent } from './diario-erros/diario-erros.component';

 const APP_ROUTES: Routes = [

  { path: '', component: HomeComponent },
  { path: 'pessoa', loadChildren: './pessoa/pessoa.module#PessoaModule'},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
