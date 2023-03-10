import { Component } from '@angular/core';
import { ConfirmationService, MenuItem, Message, PrimeNGConfig } from 'primeng/api';
import { Course } from 'src/app/shared/models/course';
import { CourseService } from 'src/app/shared/services/course.service';
import { DataView } from 'primeng/dataview';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/shared/services/department.service';


@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent {
  courses! : Course[];
  search! : FormGroup;
  msgs: Message[] = [];
  departmentId! : string | null;
  

  constructor(private courseService : CourseService,
              private departmentService : DepartmentService, 
              private primengConfig : PrimeNGConfig, 
              private fb : FormBuilder,
              private confirmationService: ConfirmationService,
              public authService: AuthService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.departmentId = this.route.snapshot.paramMap.get('id');
    console.log(this.departmentId);
    this.getCourses();

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

  getCourses() {
    if(this.departmentId)
    {
      this.departmentService.getCoursesByDepartment(this.departmentId).subscribe(data => {
        this.courses = data;
      })
      // this.courseService.getCourseList(this.departmentId).subscribe(data => {
      //   this.courses = data;
      // });  
    }
    else
    {
      this.courseService.getCourseList().subscribe(data => {
        this.courses = data;
      });
    }
  }

  deleteCourse(id : string) {
    this.courseService.deleteCourse(id).subscribe(data => {this.getCourses()});
  }

  confirmDelete(id : string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept : () => {
        this.deleteCourse(id);
        this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    })
  }  
}
