import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provedor } from './provedor.model';

@Injectable()
export class ProvedorService {
   

  localhost = 'http://localhost:4200'
  apiUrl = '/api';
  provedorUrl = '/provedora';

  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<any[]>{
    return this.httpClient.get<Provedor[]>(this.localhost+this.apiUrl+this.provedorUrl+'/ativas');
  }

  create(provedor: Provedor): Observable<Provedor>{
    return this.httpClient.post<Provedor>(this.localhost+this.apiUrl+this.provedorUrl,provedor);
  }

  findId(id: number): Observable<Provedor> {
    return this.httpClient.get(this.localhost+this.apiUrl+this.provedorUrl+'/'+id)
  }

  delete(id: number,provedor: Provedor){
    return this.httpClient.put<Provedor>(this.localhost+this.apiUrl+this.provedorUrl+'/delete/'+id,provedor)
  }

  update(provedor: Provedor){
    return this.httpClient.put<Provedor>(this.localhost+this.apiUrl+this.provedorUrl,provedor)
  }


}
