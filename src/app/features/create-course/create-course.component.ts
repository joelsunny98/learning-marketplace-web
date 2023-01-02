import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/shared/models/course';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {
  createCourseForm!: FormGroup;
  courseId!: string | null;

  constructor(private courseService: CourseService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buildCourseForm();
    this.courseId = this.route.snapshot.paramMap.get('id');
    if (this.courseId) {
      this.getCourseDetail(this.courseId);
    }
  }

  buildCourseForm() {
    this.createCourseForm = this.fb.group({
      title: new FormControl(''),
      reference: new FormControl(''),
      subtitle: new FormControl(''),
      overview: new FormControl(''),
      type: new FormControl(''),
      coursePrice: new FormControl(''),
      category: new FormControl(''),
      credits: new FormControl(''),
      level: new FormControl(''),
      deliveryMethod: new FormControl(''),
      status: new FormControl(''),
      publishStatus: new FormControl(''),
      publishAt: new FormControl(''),
      unpublishAt: new FormControl(''),
      departmentId: new FormControl(''),
      trainerId: new FormControl('')
    })
  }

  saveCourse() {
    if (this.courseId) {
      this.courseService.updateCourse(this.createCourseForm.value, this.courseId).subscribe();
    }
    else {
      this.courseService.createCourse(this.createCourseForm.value).subscribe();
    }
  }

  getCourseDetail(courseId: string) {
    this.courseService.getCourse(courseId).subscribe(course => {
      this.createCourseForm.patchValue(course);
      this.createCourseForm.get('publishAt')?.patchValue(new Date(course.publishAt))
      this.createCourseForm.get('unpublishAt')?.patchValue(new Date(course.unpublishAt))
    })
  }

}
