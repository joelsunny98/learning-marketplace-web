import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Course } from 'src/app/shared/models/course';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {
  createCourseForm! : FormGroup;



  constructor(private courseService : CourseService, private fb : FormBuilder) {}

  createCourse(){
    
    this.courseService.createCourse(this.createCourseForm.value).subscribe();
  }

  ngOnInit() : void {
    this.createCourseForm = this.fb.group({
      title : new FormControl(''),
      reference : new FormControl(''),
      subtitle : new FormControl(''),
      overview : new FormControl(''),
      type : new FormControl(''),
      coursePrice : new FormControl(''),
      category : new FormControl(''),
      credits : new FormControl(''),
      level : new FormControl(''),
      deliveryMethod : new FormControl(''),
      status : new FormControl(''),
      publishSatus : new FormControl(''),
      publishAt : new FormControl(''),
      unpublishAt  : new FormControl(''),
      departmentId  : new FormControl(''),
      trainerID  : new FormControl('')
    })
  }

}
