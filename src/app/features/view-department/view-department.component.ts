import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { Department } from 'src/app/shared/models/department';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.scss']
})
export class ViewDepartmentComponent {

  departments! : Department[];
  search! : FormGroup;
  msgs: Message[] = [];
  display : boolean = false;
  role: any;

  constructor(private departmentService : DepartmentService, 
              private primengConfig : PrimeNGConfig, 
              private fb : FormBuilder,
              private confirmationService: ConfirmationService,
              public authService: AuthService) { }

  ngOnInit() {
    this.role = this.authService.decodedToken.role;

    this.getDepartments();

    this.search = this.fb.group({
      name : new FormControl('')
    });

    this.search.valueChanges.subscribe(data => {
      this.departmentService.getDepartmentList(data.name).subscribe(dat => {
        this.departments = dat;
      });
    })
  }

  getDepartments() {
    this.departmentService.getDepartmentList().subscribe(data => {
      this.departments = data;
    });
  }

  deleteDepartment(id : string) {
    this.departmentService.deleteDepartment(id).subscribe(data => {this.getDepartments()});
  }

  confirmDelete(id : string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept : () => {
        this.deleteDepartment(id);
        this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    })
  }

  showDisplay() {
    this.display = true;
  }
}
