import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyCourseComponent } from './features/apply-course/apply-course.component';
import { CreateCourseComponent } from './features/create-course/create-course.component';
import { CreateDepartmentComponent } from './features/create-department/create-department.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ViewCoursesComponent } from './features/view-courses/view-courses.component';
import { ViewDepartmentComponent } from './features/view-department/view-department.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path : '', redirectTo : 'login', pathMatch : 'full' }, 
  { path : 'login', component: LoginComponent},
  { path : 'register', component : RegisterComponent },
  { path : 'create-course', component: CreateCourseComponent, canActivate : [AuthGuard] },
  { path : 'course/:id/edit', component: CreateCourseComponent, canActivate : [AuthGuard] },
  { path : 'create-department', component : CreateDepartmentComponent, canActivate : [AuthGuard] },
  { path : 'department/:id/edit', component : CreateDepartmentComponent, canActivate : [AuthGuard] },
  { path : 'department', component : ViewDepartmentComponent, canActivate : [AuthGuard] },
  { path : 'course', component : ViewCoursesComponent, canActivate : [AuthGuard] },
  { path : 'apply-course', component : ApplyCourseComponent, canActivate : [AuthGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
