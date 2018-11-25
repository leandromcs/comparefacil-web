import { PlanoServico } from './../plano/plano.model';
import { Colaboracao } from './colaboracao.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provedor } from '../provedor/provedor.model';

@Injectable()
export class ColaboracaoService {

  localhost = 'http://localhost:4200';
  apiUrl = '/api';
  colabotacaoUrl = '/colaboracao';
  colabotacao: Colaboracao;
  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<any[]> {
    return this.httpClient.get<Colaboracao[]>(this.localhost + this.apiUrl + this.colabotacaoUrl);
  }

  create(colabotacao: Colaboracao): Observable<Colaboracao> {
    return this.httpClient.post<Colaboracao>(this.localhost + this.apiUrl + this.colabotacaoUrl, colabotacao);
  }

  createPlano(planoServico: PlanoServico): Observable<PlanoServico> {
    return this.httpClient.post<PlanoServico>(this.localhost + this.apiUrl + '/plano-servico', planoServico);
  }


  findId(id: number): Observable<Colaboracao> {
    return this.httpClient.get(this.localhost + this.apiUrl + this.colabotacaoUrl + '/' + id);
  }

  delete(id: number, colabotacao: Colaboracao) {
    return this.httpClient.delete(this.localhost + this.apiUrl + this.colabotacaoUrl + '/delete/' + id, colabotacao);
  }

  update(colabotacao: Colaboracao) {
    return this.httpClient.put<Colaboracao>(this.localhost + this.apiUrl + this.colabotacaoUrl, colabotacao);
  }

  findAllProvedores(): Observable<any> {
      return this.httpClient.get(this.localhost + this.apiUrl + '/provedora/provedoras');
  }


}
