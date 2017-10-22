import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';  
import { HttpClient } from '@angular/common/http';
  

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

getAllForUser() {
    return this.http.get(`${environment.apiUrl}posts`);
}

getBySlug(slug) {
  return this.http.get(`${environment.apiUrl}public/posts/${slug}`);
  
}

getAll() {
  return this.http.get(`${environment.apiUrl}public/posts`);
  
}

getById(id: number) {
    return this.http.get(`${environment.apiUrl}posts/${id}`);
}

create(user) {
    return this.http.post(`${environment.apiUrl}posts`, user);
}

update(id, post) {
    return this.http.put(`${environment.apiUrl}posts/${id}`, post);
}



  deletePost(id: number) {
      return this.http.delete(`${environment.apiUrl}posts/${id}`);
  }

}
