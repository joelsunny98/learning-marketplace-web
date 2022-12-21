import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/shared/models/user-login';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;

  
  
  constructor(private authService : AuthService, private fb : FormBuilder, private readonly router: Router,) { }

  login() {
    this.authService.login(this.loginForm.value).subscribe((token : any) => {
      localStorage.setItem('authToken', token.accessToken);
    })
  }

  ngOnInit() : void {
    this.loginForm = this.fb.group({
      username : new FormControl(''),
      password : new FormControl('')

    });

    this.loginForm.valueChanges.subscribe(console.log)

    // if(this.authService.isLoggedIn()){
    //   this.router.navigate(['/view-department']);
    // }
  }

}
