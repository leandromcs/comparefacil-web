import { Colaboracao } from './../colaboracao/colaboracao.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  localhost = 'http://localhost:4200';
  apiUrl = '/api';
  colabotacaoUrl = '/colaboracao';
  colabotacao: Colaboracao;
  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<any[]> {
    return this.httpClient.get<Colaboracao[]>(this.localhost + this.apiUrl + this.colabotacaoUrl + '/aprovados');
  }

  dynamicSearch(pesquisa?: string ): Observable<any[]> {
    return this.httpClient.get<Colaboracao[]>(this.localhost + this.apiUrl + this.colabotacaoUrl + '/dynamicSearch/' + pesquisa);
  }





}
