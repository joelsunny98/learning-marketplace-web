import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Department } from 'src/app/shared/models/department';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent {

  createDepartmentForm! : FormGroup;

  department!: Department;

  constructor(private departmentService : DepartmentService, private fb : FormBuilder) {}

  createDepartment(department : Department){
    
    department.name = this.createDepartmentForm.controls['name'].value;
    department.subtitle = this.createDepartmentForm.controls['subtitle'].value;
    department.summary = this.createDepartmentForm.controls['summary'].value;
    department.logo = this.createDepartmentForm.controls['logo'].value;
    department.backgroundImage = this.createDepartmentForm.controls['backgroundImage'].value;
    department.locationId = this.createDepartmentForm.controls['locationId'].value;

    this.departmentService.createDepartment(department).subscribe();
  }

  ngOnInit() : void {
    this.createDepartmentForm = this.fb.group({
      name : new FormControl(''),
      subtitle : new FormControl(''),
      summary : new FormControl(''),
      logo : new FormControl(''),
      backgroundImage : new FormControl(''),
      locationId : new FormControl('')
    })
  }


}
