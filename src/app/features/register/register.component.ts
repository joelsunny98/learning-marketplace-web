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

  

  constructor(private authService : AuthService, private fb : FormBuilder) { }

  register() {
    this.authService.register(this.registerForm.value).subscribe();
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
