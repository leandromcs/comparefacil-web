import { OnInit, Component } from '@angular/core';
import { LoginService } from './login.service';
import { Pessoa } from '../pessoa/pessoa.model';
import { Router } from '@angular/router';
@Component({templateUrl: './logout.component.html'})
export class LogoutComponent implements OnInit {


    constructor(private loginService: LoginService,
                private router: Router) {}

    ngOnInit() {
        this.logout();
    }

    public logout() {
          sessionStorage.clear();
          location.reload();
          this.router.navigate(['/']);
    }


}