import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable()
export class UserService {
    
    constructor(private http: HttpClient) { }

    create(user) {
        return this.http.post(`${environment.apiUrl}register`, user);
    }
}