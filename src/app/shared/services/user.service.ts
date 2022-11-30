import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "users";
  
  constructor(private http : HttpClient) { }

  public getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getUser(id : string) : Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/${this.url}`);
  }

  public updateUser(user : User, id : string) : Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/${this.url}/${id}`, user);
  }

  public deleteUser(id : string) : Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${this.url}/${id}`);
  }
}
