import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule }  from 'primeng/dataview';
import {ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { CreateDepartmentComponent } from './features/create-department/create-department.component';
import { CreateCourseComponent } from './features/create-course/create-course.component';
import { ViewDepartmentComponent } from './features/view-department/view-department.component';
import { ViewCoursesComponent } from './features/view-courses/view-courses.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { ListComponent } from './features/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateDepartmentComponent,
    CreateCourseComponent,
    ViewDepartmentComponent,
    ViewCoursesComponent,
    NavbarComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DataViewModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    RippleModule,
    MenubarModule,
    
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
