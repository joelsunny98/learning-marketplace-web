import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/shared/models/user-register';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm! : FormGroup;

  dropdownItems = [
    { name : 'Learner', code : 2 },
    { name :  'Trainer', code : 3 }
  ];
  

  constructor(private authService : AuthService, private fb : FormBuilder, private router: Router) { }

  register() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe(data => {
      this.router.navigate(['/login'])
    });
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      role : new FormControl(2),
      username : new FormControl(''),
      password : new FormControl('')
    })
  }

}
