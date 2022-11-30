import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LearnerApplication } from '../models/lernerApplication';

@Injectable({
  providedIn: 'root'
})
export class LearningApplicationService {
  private url= "learner-application";

  constructor(private http : HttpClient) { }

  public getLearnerApplicationList(): Observable<LearnerApplication[]> {
    return this.http.get<LearnerApplication[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getLearnerApplication(id : string) : Observable<LearnerApplication> {
    return this.http.get<LearnerApplication>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public createLearnerApplication(learnerApplication : LearnerApplication) : Observable<LearnerApplication> {
    return this.http.post<LearnerApplication>(`${environment.apiUrl}/${this.url}`, learnerApplication);
  }

  public updateLearnerApplication(learnerApplication : LearnerApplication, id : string) : Observable<LearnerApplication> {
    return this.http.put<LearnerApplication>(`${environment.apiUrl}/${this.url}/${id}`, learnerApplication);
  }

  public deleteLearnerApplication(id : string) : Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${this.url}/${id}`);
  }
}
