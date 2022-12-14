import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/shared/models/user-login';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;

  user! : UserLogin;
  
  constructor(private authService : AuthService, private fb : FormBuilder) { }

  login(user : UserLogin) {

    user.username = this.loginForm.controls['username'].value;
    user.password = this.loginForm.controls['password'].value;

    this.authService.login(user).subscribe((token : string) => {
      localStorage.setItem('authToken', token);
    })
  }

  ngOnInit() : void {
    this.loginForm = this.fb.group({
      username : new FormControl(''),
      password : new FormControl('')

    });

    this.loginForm.valueChanges.subscribe(console.log)
  }

}
