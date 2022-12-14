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

  course! : Course;

  constructor(private courseService : CourseService, private fb : FormBuilder) {}

  createCourse(course : Course){
    course.title = this.createCourseForm.controls['title'].value;
    course.reference = this.createCourseForm.controls['reference'].value;
    course.subtitle = this.createCourseForm.controls['subtitle'].value;
    course.overview = this.createCourseForm.controls['overview'].value;
    course.type = this.createCourseForm.controls['type'].value;
    course.coursePrice = this.createCourseForm.controls['coursePrice'].value;
    course.category = this.createCourseForm.controls['category'].value;
    course.credits = this.createCourseForm.controls['credits'].value;
    course.level = this.createCourseForm.controls['level'].value;
    course.deliveryMethod = this.createCourseForm.controls['deliveryMethod'].value;
    course.status = this.createCourseForm.controls['status'].value;
    course.publishStatus = this.createCourseForm.controls['publishStatus'].value;
    course.publishAt = this.createCourseForm.controls['publishAt'].value;
    course.unpublishAt = this.createCourseForm.controls['unpublishAt'].value;
    course.departmentId = this.createCourseForm.controls['departmentId'].value;
    course.trainerId = this.createCourseForm.controls['trainerId'].value;

    this.courseService.createCourse(course).subscribe();
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
