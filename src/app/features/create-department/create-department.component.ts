import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/shared/models/department';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent {

  createDepartmentForm! : FormGroup;
  departmentId! : string | null;


  constructor(private departmentService : DepartmentService, private fb : FormBuilder, private route: ActivatedRoute) {}


  ngOnInit() : void {
    this.buildDepartmentForm();
    this.departmentId = this.route.snapshot.paramMap.get('id');
    if (this.departmentId) {
      this.getDepartmentDetail(this.departmentId);
    }
  }

  buildDepartmentForm() {
    this.createDepartmentForm = this.fb.group({
      name : new FormControl(''),
      subtitle : new FormControl(''),
      summary : new FormControl(''),
      logo : new FormControl(''),
      backgroundImage : new FormControl(''),
      locationId : new FormControl('')
    })
  }

  saveDepartment() {
    if(this.departmentId) {
      this.departmentService.updateDepartment(this.createDepartmentForm.value, this.departmentId).subscribe();
    }
    else {
      this.departmentService.createDepartment(this.createDepartmentForm.value).subscribe();
    }
  }

  getDepartmentDetail(departmentId :  string) {
    this.departmentService.getDepartment(departmentId).subscribe(dept => {
      this.createDepartmentForm.patchValue(dept);
    })
  }


}
