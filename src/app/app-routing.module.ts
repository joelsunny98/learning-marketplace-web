import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './features/create-course/create-course.component';
import { CreateDepartmentComponent } from './features/create-department/create-department.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ViewCoursesComponent } from './features/view-courses/view-courses.component';
import { ViewDepartmentComponent } from './features/view-department/view-department.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'register', component : RegisterComponent },
  { path : 'create-course', component: CreateCourseComponent, canActivate : [AuthGuard] },
  { path : 'create-department', component : CreateDepartmentComponent, canActivate : [AuthGuard] },
  { path : 'view-department', component : ViewDepartmentComponent, canActivate : [AuthGuard] },
  { path : 'view-course', component : ViewCoursesComponent, canActivate : [AuthGuard] },
  { path : '', redirectTo : 'login', pathMatch : 'full', } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
