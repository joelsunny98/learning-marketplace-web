import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Course } from 'src/app/shared/models/course';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent {
  courses! : Course[];

  constructor(private courseService : CourseService, private primengConfig : PrimeNGConfig) { }

  ngOnInit() {
    this.courseService.getCourseList().subscribe(data => {
      this.courses = data;
    });

    

    this.primengConfig.ripple = true;
  }
}
