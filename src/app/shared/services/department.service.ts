import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private url = "departments";

  constructor(private http : HttpClient) { }

  public getDepartmentList(name? : any): Observable<Department[]> {
    if(name == undefined)
    {
      return this.http.get<Department[]>(`${environment.apiUrl}/${this.url}`);
    }
    else 
    {
      return this.http.get<Department[]>(`${environment.apiUrl}/${this.url}?name=${name}`);
    }
    
  }

  public getDepartment(id : string) : Observable<Department> {
    return this.http.get<Department>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public createDepartment(department : Department) : Observable<Department> {
    return this.http.post<Department>(`${environment.apiUrl}/${this.url}`, department);
  }

  public updateDepartment(department : Department, id: string) : Observable<Department> {
    return this.http.put<Department>(`${environment.apiUrl}/${this.url}/${id}`, department);
  }

  public deleteDepartment(id: string) : Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${this.url}/${id}`);
  }

}
