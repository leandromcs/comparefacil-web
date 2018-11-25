import { AvaliarColaboracao } from './avaliar-colaboracao.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AvaliacaoColaboracaoService {

  localhost = 'http://localhost:4200';
  apiUrl = '/api';
  colabotacaoUrl = '/avaliacao-colaboracao';
  avaliarColaboracao: AvaliarColaboracao;
  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<any[]> {
    return this.httpClient.get<AvaliarColaboracao[]>(this.localhost + this.apiUrl + this.colabotacaoUrl);
  }

  create(colabotacao: AvaliarColaboracao): Observable<AvaliarColaboracao> {
    return this.httpClient.post<AvaliarColaboracao>(this.localhost + this.apiUrl + this.colabotacaoUrl, colabotacao);
  }

  createPlano(planoServico: AvaliarColaboracao): Observable<AvaliarColaboracao> {
    return this.httpClient.post<AvaliarColaboracao>(this.localhost + this.apiUrl + '/plano-servico', planoServico);
  }


  findId(id: number): Observable<AvaliarColaboracao> {
    return this.httpClient.get(this.localhost + this.apiUrl + this.colabotacaoUrl + '/' + id);
  }

  delete(id: number) {
    return this.httpClient.delete(this.localhost + this.apiUrl + this.colabotacaoUrl + '/delete/' + id);
  }

  update(colabotacao: AvaliarColaboracao) {
    return this.httpClient.put<AvaliarColaboracao>(this.localhost + this.apiUrl + this.colabotacaoUrl, colabotacao);
  }

  findAllProvedores(): Observable<any> {
      return this.httpClient.get(this.localhost + this.apiUrl + '/provedora/provedoras');
  }


}
