import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Course } from 'src/app/shared/models/course';
import { CourseService } from 'src/app/shared/services/course.service';
import { DataView } from 'primeng/dataview';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent {
  courses! : Course[];

  search! : FormGroup;

  

  constructor(private courseService : CourseService, private primengConfig : PrimeNGConfig, private fb : FormBuilder) { }

  ngOnInit() {
    this.courseService.getCourseList().subscribe(data => {
      this.courses = data;
    });
    
    this.search = this.fb.group({
      name : new FormControl('')
    });

    this.search.valueChanges.subscribe(data => {
        this.courseService.getCourseList(data.name).subscribe(dat => {
          this.courses = dat;
        });
    });

    this.primengConfig.ripple = true;
  }

  
}
