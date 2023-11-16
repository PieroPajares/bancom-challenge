import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../domains/interfaces/user-http.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  private readonly endpoint = `${environment.apiUrl}/users`;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint);
  }
}
