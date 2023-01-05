import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/shared/models/user-login';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from 'src/app/shared/models/token';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  helper = new JwtHelperService();
  decodedToken : any;

  
  
  constructor(private authService : AuthService, private fb : FormBuilder, private readonly router: Router,) { }

  login() {
    this.authService.login(this.loginForm.value).subscribe((token : Token) => {
      localStorage.setItem('authToken', token.accessToken);
      localStorage.setItem('refreshToken', token.refreshToken);
      this.authService.decodeToken(token.accessToken);
      
      
      this.router.navigate(['/department']);
    }
    )
    
  }

  ngOnInit() : void {
    this.loginForm = this.fb.group({
      username : new FormControl(''),
      password : new FormControl('')

    });

    

    if(this.authService.isLoggedIn()){
      this.router.navigate(['/department']);
    }
  }

}
