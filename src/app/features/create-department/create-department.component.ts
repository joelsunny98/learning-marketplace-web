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


  constructor(private departmentService : DepartmentService, private fb : FormBuilder) {}

  createDepartment(){
    
    console.log(this.createDepartmentForm.value);

    this.departmentService.createDepartment(this.createDepartmentForm.value).subscribe();
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
