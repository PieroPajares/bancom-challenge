import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserPost, UserPostForm } from '../domains/interfaces/post-http.interface';

@Injectable({
  providedIn: 'root'
})
export class PostHttpService {

  private readonly endpoint = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getPostsByUser(userId: number): Observable<UserPost[]> {
    const url = `${this.endpoint}/users/${userId}/posts`;

    return this.httpClient.get<UserPost[]>(url);
  }

  createUserPost(form: UserPostForm): Observable<UserPostForm> {
    const url = `${this.endpoint}/posts`;
    
    return this.httpClient.post<UserPostForm>(url, form);
  }
}
