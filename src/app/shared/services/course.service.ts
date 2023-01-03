import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url = "courses"

  constructor(private http : HttpClient) { }

  public getCourseList(name? : any): Observable<Course[]> {
    if(name == undefined) 
    {
      return this.http.get<Course[]>(`${environment.apiUrl}/${this.url}`);
    }
    else
    {
      return this.http.get<Course[]>(`${environment.apiUrl}/${this.url}?name=${name}`);
    }
  }

  public getCourse(id : string) : Observable<Course> {
    return this.http.get<Course>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public createCourse(course : Course) : Observable<Course> {
    return this.http.post<Course>(`${environment.apiUrl}/${this.url}`, course);
  }

  public updateCourse(course : Course, id : string) : Observable<Course> {
    return this.http.put<Course>(`${environment.apiUrl}/${this.url}/${id}`, course);
  }

  public deleteCourse(id: string) : Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public getTrainerName() : Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${environment.apiUrl}/trainers`)
  }

}
