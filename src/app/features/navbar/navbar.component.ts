import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RefreshToken } from 'src/app/shared/models/refreshToken';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items! : MenuItem[];

  data : RefreshToken = {};

  

  constructor(private authService : AuthService, ) {}

  ngOnInit()  {

    if(this.authService.isLoggedIn()){
      this.items = [
        { label : 'View Courses', routerLink : 'view-course' },
        { label : 'View Departments', routerLink : 'view-department'},
        { label : 'Create Course' , routerLink: 'create-course'},
        { label : 'Create Department', routerLink : 'create-department' }
  
      ]
    }
    else {
      this.items = [
        { label : 'Register', icon :'pi pi-fw pi-user-plus', routerLink : 'register'},
        { label : 'Login', routerLink : 'login'},
      ]
    } 
  }

  Logout() {
    this.data.refreshToken = localStorage.getItem('refreshToken') as string;
    this.authService.logout(this.data).subscribe();
    localStorage.clear(); 
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}

