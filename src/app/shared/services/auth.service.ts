import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { UserRegister } from '../models/user-register';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../models/user-login';
import { RefreshToken } from '../models/refreshToken';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  public register(user : UserRegister) : Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/register', user);
  }

  public login(user : UserLogin) : Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/login', user );
  }

  public logout(refreshToken : RefreshToken) : Observable<any> {
    return this.http.post<any>(environment.apiUrl+'/logout', refreshToken);

    //clear items from local storage
  }

  public refreshToken(refreshToken : string) : Observable<any> {
    return this.http.post<string>(environment.apiUrl + '/token', refreshToken);
  }

  public isLoggedIn(): any {
    const token = localStorage.getItem('authToken');
    return !this.helper.isTokenExpired(token);
  // return !!localStorage.getItem('authToken');
 
  }
}
