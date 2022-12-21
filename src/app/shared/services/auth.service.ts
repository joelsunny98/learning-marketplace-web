import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { UserRegister } from '../models/user-register';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../models/user-login';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user : UserRegister) : Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/register', user);
  }

  public login(user : UserLogin) : Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/login', user );
  }

  public logout(refreshToken : string) : Observable<any> {
    return this.http.post<any>(environment.apiUrl+'/logout', refreshToken);
  }

  public refreshToken(refreshToken : string) : Observable<any> {
    return this.http.post<string>(environment.apiUrl + '/token', refreshToken);
  }

  public isLoggedIn(): any {
    const existingToken = localStorage.getItem('authToken');

    if (!existingToken) {
      return false;
    }
    return existingToken;
  }
}
