import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Course } from 'src/app/shared/models/course';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-apply-course',
  templateUrl: './apply-course.component.html',
  styleUrls: ['./apply-course.component.scss']
})
export class ApplyCourseComponent {

    course! : Course;
    courseId! : string | null;

    constructor(private courseService : CourseService,
                private route: ActivatedRoute,
                private messageService: MessageService,
                private readonly router : Router) {}

    ngOnInit(): void {

      this.courseId = this.route.snapshot.paramMap.get('id');
      this.courseService.getCourse(this.courseId).subscribe(data => {
        this.course = data;
      })
    }

    saveApplication() {
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
