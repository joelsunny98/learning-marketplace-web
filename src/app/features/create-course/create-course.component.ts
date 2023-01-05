import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

import { Department } from 'src/app/shared/models/department';
import { Trainer } from 'src/app/shared/models/trainer';

import { CourseService } from 'src/app/shared/services/course.service';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {
  createCourseForm!: FormGroup;
  courseId!: string | null;
  message!: Message[];
  DepartmentData! : Department[];
  TrainerData! : Trainer[];


  constructor(private courseService: CourseService, 
              private departmentService: DepartmentService,
              private fb: FormBuilder, 
              private route: ActivatedRoute, 
              private messageService: MessageService,
              private readonly router: Router ) { }

  ngOnInit(): void {
    this.buildCourseForm();
    this.courseId = this.route.snapshot.paramMap.get('id');
    if (this.courseId) {
      this.getCourseDetail(this.courseId);
    }

    this.departmentService.getDepartmentList().subscribe(data => {
      this.DepartmentData = data;
    });

    this.courseService.getTrainerName().subscribe(data => {
      this.TrainerData = data;
    });
  }

  buildCourseForm() {
    this.createCourseForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      reference: new FormControl('', [Validators.required]),
      subtitle: new FormControl('', [Validators.required]),
      overview: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      coursePrice: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      credits: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      deliveryMethod: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      publishStatus: new FormControl('', [Validators.required]),
      publishAt: new FormControl('', [Validators.required]),
      unpublishAt: new FormControl('', [Validators.required]),
      departmentId: new FormControl('', [Validators.required]),
      trainerId: new FormControl('', [Validators.required])
    })
  }

  saveCourse() {
    if (this.courseId) {
      this.courseService.updateCourse(this.createCourseForm.value, this.courseId).subscribe(data => {
        this.showMessage();
      });
      
    }
    else {
      this.courseService.createCourse(this.createCourseForm.value).subscribe(data => {
        this.showMessage();
      });
    }
  }

  getCourseDetail(courseId: string) {
    this.courseService.getCourse(courseId).subscribe(course => {
      this.createCourseForm.patchValue(course);
      this.createCourseForm.get('publishAt')?.patchValue(new Date(course.publishAt))
      this.createCourseForm.get('unpublishAt')?.patchValue(new Date(course.unpublishAt))
    })
  }

  showMessage() {
    if(this.courseId){
      this.messageService.add({
        severity: "success",
        summary: "Updated",
        detail: "Updated course successfully"
      });
    }
    else {
      this.messageService.add({
        severity: "success",
        summary: "Saved",
        detail: "Created course successfully"
      });
    }
    setTimeout(() => {
      this.router.navigate(['/course']);
    }, 1200);
    
  }


}
