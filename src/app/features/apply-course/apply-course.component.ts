import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Course } from 'src/app/shared/models/course';
import { LearnerApplication } from 'src/app/shared/models/lernerApplication';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CourseService } from 'src/app/shared/services/course.service';
import { LearningApplicationService } from 'src/app/shared/services/learning-application.service';

@Component({
  selector: 'app-apply-course',
  templateUrl: './apply-course.component.html',
  styleUrls: ['./apply-course.component.scss']
})
export class ApplyCourseComponent {

    course! : Course;
    courseId! : string | null;
    application : LearnerApplication = {};

    constructor(private courseService : CourseService,
                private route: ActivatedRoute,
                private messageService: MessageService,
                private readonly router : Router,
                public authService : AuthService,
                private learnerService: LearningApplicationService) {}

    ngOnInit(): void {

      this.courseId = this.route.snapshot.paramMap.get('id');
      this.courseService.getCourse(this.courseId).subscribe(data => {
        this.course = data;
      })
    }

    saveApplication() {
      this.application.status = "Pending";
      this.application.courseId = this.courseId;
      this.application.learnerId = this.authService.decodedToken.sub

      this.learnerService.createLearnerApplication(this.application).subscribe();
      this.showMessage();
    }

    showMessage() {
      this.messageService.add({
        severity: "success",
        summary: "Saved",
        detail: "Application Successfull"
      });
      setTimeout(() => {
        this.router.navigate(['/course']);
      }, 1200);
    }
}
