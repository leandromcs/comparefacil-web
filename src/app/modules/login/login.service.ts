import { Pessoa } from './../pessoa/pessoa.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';

@Injectable()
export class LoginService {

    localhost = 'http://localhost:4200';
    apiUrl = '/api';
    auth = '/pessoa';

    // private logoutUrl = environment.apiUrl + '/logout';

    constructor(private http: HttpClient) { }

    login(pessoa: Pessoa): Observable<any> {
        return this.http.post(this.localhost + this.apiUrl + this.auth + '/login', pessoa);
    }

    logout(): Observable<any> {
        return this.http.get(this.localhost + this.apiUrl + this.auth + '/logout');
    }

}

