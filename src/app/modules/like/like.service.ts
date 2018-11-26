import { Observable } from 'rxjs';
import { Like } from './like.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LikeService {

localhost = 'http://localhost:4200';
apiUrl = '/api';
likeUrl = '/like';

    constructor(private httpClient: HttpClient) {}

    like(like: Like): Observable<Like> {
        return this.httpClient.post<Like>(this.localhost + this.apiUrl + this.likeUrl, like);
    }

    getLike(id: number): Observable<any> {
        return this.httpClient.get(this.localhost + this.apiUrl + this.likeUrl + '/countLike/' + id);
    }

    getDeslike(id: number): Observable<any> {
        return this.httpClient.get(this.localhost + this.apiUrl + this.likeUrl + '/countDeslike/' + id);
    }
}