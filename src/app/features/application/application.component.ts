import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LearnerApplication } from 'src/app/shared/models/lernerApplication';
import { LearningApplicationService } from 'src/app/shared/services/learning-application.service';
import {ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {
  
  applications! : LearnerApplication[];
  statuses! : any[];
  first = 0;
  rows = 10;


  constructor(private readonly applicationService : LearningApplicationService,
              private messageService: MessageService, 
              private cdref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getApplications();
    
    this.statuses = [
      { label: "Approved", value: "Approved" },
      { label: "Rejected", value: "Rejected" },
      { label: "Pending", value: "Pending" }
    ];
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  getApplications() {
    this.applicationService.getLearnerApplicationList().subscribe(data => {
      this.applications = data;
      this.first = this.first + this.rows;
      console.log(this.first)
    });    
  }    

  approveApplication(id: string){
    this.applicationService.approveApplication(id).subscribe(data => {
      this.getApplications();
      this.messageService.add({
        severity: "success",
        summary: "Approved",
        detail: "Application approved successfully"
      });  
    });
  }

  rejectApplication(id: string){
    this.applicationService.rejectApplication(id).subscribe(data => {
      this.getApplications();
      this.messageService.add({
        severity: "error",
        summary: "Rejected",
        detail: "Application rejected successfully"
      });  
    });
  }

  paginate(event) {
    this.first = event.first
    this.rows = event.rows
  }

}


