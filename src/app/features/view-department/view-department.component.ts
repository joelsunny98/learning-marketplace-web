import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Department } from 'src/app/shared/models/department';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.scss']
})
export class ViewDepartmentComponent {

  departments! : Department[];

  search! : FormGroup;


  constructor(private departmentService : DepartmentService, private primengConfig : PrimeNGConfig, private fb : FormBuilder) { }

  ngOnInit() {
    this.getDepartments();

    this.search = this.fb.group({
      name : new FormControl('')
    });

    this.search.valueChanges.subscribe(data => {
      this.departmentService.getDepartmentList(data.name).subscribe(dat => {
        this.departments = dat;
      });
    })
    
    

    this.primengConfig.ripple = true;

    
  }

  getDepartments() {
    this.departmentService.getDepartmentList().subscribe(data => {
      this.departments = data;
    });
  }

  deleteDepartment(id : string) {
    this.departmentService.deleteDepartment(id).subscribe(data => {this.getDepartments()});
  }
}
