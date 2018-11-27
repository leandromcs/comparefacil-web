import { PlanoServico } from './../plano/plano.model';
import { Colaboracao } from './colaboracao.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provedor } from '../provedor/provedor.model';
import { ResponseContentType } from '@angular/http';

@Injectable()
export class ColaboracaoService {

  localhost = 'http://localhost:4200';
  apiUrl = '/api';
  colaboracaoUrl = '/colaboracao';
  colaboracao: Colaboracao;
  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<any[]> {
    return this.httpClient.get<Colaboracao[]>(this.localhost + this.apiUrl + this.colaboracaoUrl);
  }

  create(colaboracao: Colaboracao): Observable<Colaboracao> {

    return this.httpClient.post<Colaboracao>(this.localhost + this.apiUrl + this.colaboracaoUrl, colaboracao);
  }

  createPlano(planoServico: PlanoServico): Observable<PlanoServico> {
    return this.httpClient.post<PlanoServico>(this.localhost + this.apiUrl + '/plano-servico', planoServico);
  }


  findId(id: number): Observable<Colaboracao> {
    return this.httpClient.get(this.localhost + this.apiUrl + this.colaboracaoUrl + '/' + id);
  }

  delete(id: number) {
    return this.httpClient.delete(this.localhost + this.apiUrl + this.colaboracaoUrl + '/delete/' + id);
  }

  update(colaboracao: Colaboracao) {
    return this.httpClient.put<Colaboracao>(this.localhost + this.apiUrl + this.colaboracaoUrl, colaboracao);
  }

  findAllProvedores(): Observable<any> {
      return this.httpClient.get(this.localhost + this.apiUrl + '/provedora/provedoras');
  }

  uploadFile(file: File): any {
    // const fileBase64 = btoa(file).;
    // console.log(URL.createObjectURL(fileBase64));
    const headers: any = {'Content-Type': 'multipart/form-data'};
    const body = new FormData();
    body.append('file', file);
    console.log(file);
    return this.httpClient.post(this.localhost + this.apiUrl + this.colaboracaoUrl + '/image', body, headers);
  }


}
