import { Component } from '@angular/core';
import { LearnerApplication } from 'src/app/shared/models/lernerApplication';
import { LearningApplicationService } from 'src/app/shared/services/learning-application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {
  applications! : LearnerApplication[];


  constructor(private readonly applicationService : LearningApplicationService) {}

  ngOnInit(): void {
    this.getApplications();
  }
  
  getApplications() {
    this.applicationService.getLearnerApplicationList().subscribe(data => {
      this.applications = data;
    });    
  }    

  approveApplication(id: string){
    this.applicationService.approveApplication(id).subscribe(data => {this.getApplications()});
  }

  rejectApplication(id: string){
    this.applicationService.rejectApplication(id).subscribe(data => {this.getApplications()});
  }
}
