import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './features/create-course/create-course.component';
import { CreateDepartmentComponent } from './features/create-department/create-department.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'register', component : RegisterComponent },
  { path : 'create-course', component: CreateCourseComponent },
  { path : 'create-department', component : CreateDepartmentComponent },
  { path : '', redirectTo : 'register', pathMatch : 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
