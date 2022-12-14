import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserRegister } from 'src/app/shared/models/user-register';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm! : FormGroup;

  user! : UserRegister;

  constructor(private authService : AuthService, private fb : FormBuilder) { }

  register(user : UserRegister) {

    user.firstName = this.registerForm.controls['firstName'].value;
    user.lastName = this.registerForm.controls['lastName'].value;
    user.role = Number(this.registerForm.controls['role'].value);
    user.username = this.registerForm.controls['username'].value;
    user.password = this.registerForm.controls['password'].value;

    this.authService.register(user).subscribe();
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      role : new FormControl(''),
      username : new FormControl(''),
      password : new FormControl('')
    })
  }

}
