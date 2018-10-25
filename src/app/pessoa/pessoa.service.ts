import { Pessoa } from './pessoa.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PessoaService {

  localhost = 'http://localhost:4200'
  apiUrl = '/api';
  pessoaUrl = '/pessoa';
  pessoa: Pessoa;
  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<Pessoa[]>{
    return this.httpClient.get<Pessoa[]>(this.localhost+this.apiUrl+this.pessoaUrl);
  }

  create(pessoa: Pessoa): Observable<Pessoa>{
    return this.httpClient.post<Pessoa>(this.localhost+this.apiUrl+this.pessoaUrl,pessoa);
  }
}
