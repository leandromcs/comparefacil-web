import { Colaboracao } from './../colaboracao/colaboracao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from './comentario.model';

@Injectable()
export class ComentarioService {
    localhost = 'http://localhost:4200';
    apiUrl = '/api';
    comentarioUrl = '/comentario';
    comentario: Comentario;

    constructor(
        public http?: HttpClient
    ) {}

    findAll(): Observable<any[]> {
        return this.http.get<Colaboracao[]>(this.localhost + this.apiUrl + this.comentarioUrl);
    }

    create(comentario: Comentario): Observable<Comentario> {
        return this.http.post<Comentario>(this.localhost + this.apiUrl + this.comentarioUrl, comentario);
    }

    getAllComentariosByColaboracaoId(id: number): Observable<any[]> {
        return this.http.get<Comentario[]>(this.localhost + this.apiUrl + this.comentarioUrl + '/comentarios/colaboracao/' + id);
    }

}