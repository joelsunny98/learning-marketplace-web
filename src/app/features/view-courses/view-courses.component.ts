import { Component } from '@angular/core';
import { ConfirmationService, MenuItem, Message, PrimeNGConfig } from 'primeng/api';
import { Course } from 'src/app/shared/models/course';
import { CourseService } from 'src/app/shared/services/course.service';
import { DataView } from 'primeng/dataview';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent {
  courses! : Course[];

  search! : FormGroup;

  msgs: Message[] = [];
  

  constructor(private courseService : CourseService, 
              private primengConfig : PrimeNGConfig, 
              private fb : FormBuilder,
              private confirmationService: ConfirmationService,
              public authService: AuthService ) { }

  ngOnInit() {
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
    this.courseService.getCourseList().subscribe(data => {
      this.courses = data;
    });
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

  // isAdminOrTrainer() {
  //   if(this.authService.decodedToken.role == "Admin" || this.authService.decodedToken.role == "Trainer") {
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  
}
