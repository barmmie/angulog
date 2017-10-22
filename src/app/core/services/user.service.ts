import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    private url: string = 'http://larlog.app/api';
    
    constructor(private http: HttpClient) { }

    create(user) {
        return this.http.post(`${this.url}/register`, user);
    }
}