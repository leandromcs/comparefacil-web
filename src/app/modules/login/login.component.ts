import { OnInit, Component } from '@angular/core';
import { LoginService } from './login.service';
import { Pessoa } from '../pessoa/pessoa.model';
import { Router } from '@angular/router';
@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

isLogin: boolean;
pessoa: Pessoa;

    constructor(private loginService: LoginService,
                private router: Router) {}

    ngOnInit() {
        this.isLogin = true;
        this.pessoa = new Pessoa;
    }

    public loginAuth(email: string, password: string) {
        this.pessoa.email = email;
        this.pessoa.password = password;
        this.loginService.login(this.pessoa).subscribe(res => {
            if ( res != null) {
                this.pessoa = res;
                // document.cookie = 'email=' + this.pessoa.email;
                // document.cookie = 'role=' + this.pessoa.cargo;
                sessionStorage.setItem('email', this.pessoa.email);
                sessionStorage.setItem('nome', this.pessoa.nome);
                sessionStorage.setItem('role', this.pessoa.cargo);

                this.router.navigate(['/home'], {queryParams: {cargo: this.pessoa.cargo}});
            }
        });
    }


}