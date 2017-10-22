import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
export const TOKEN_NAME: string = 'jwt_token';
import 'rxjs/add/operator/do';
import "rxjs/add/operator/shareReplay";
@Injectable()
export class AuthService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {   }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(data): void {
    console.dir(data);
    localStorage.setItem(TOKEN_NAME, data.token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded:any = this.jwt_decode(token);

    if (!decoded || decoded.exp === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  login(user) {
    return this.http
      .post(`${environment.apiUrl}login`, JSON.stringify(user), { headers: this.headers })
      .do(res => this.setToken(res))
      .shareReplay();
  }

  logout() {
    localStorage.removeItem(TOKEN_NAME);
  }

  isLoggedOut() {
    return this.isTokenExpired();
  }

  isLoggedIn() {
    return ! this.isTokenExpired();
  }

  private jwt_decode (token) {
    if(! token) {
      return false;
    }
    
    var base64Url = token.split('.')[1];

    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  };

}
