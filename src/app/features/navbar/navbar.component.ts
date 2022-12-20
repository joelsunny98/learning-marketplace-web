import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items! : MenuItem[];

  ngOnInit()  {
    this.items = [
      { label : 'Register', icon :'pi pi-fw pi-user-plus', routerLink : 'register'},
      { label : 'Login', routerLink : 'login'},
      { label : 'View Courses', routerLink : 'view-course' },
      { label : 'View Departments', routerLink : 'view-department'},
      { label : 'Create Course' , routerLink: 'create-course'},
      { label : 'Create Department', routerLink : 'create-department' }

    ]
  }

}
