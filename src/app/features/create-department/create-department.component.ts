import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Department } from 'src/app/shared/models/department';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent {

  createDepartmentForm!: FormGroup;
  departmentId!: string | null;



  constructor(private departmentService: DepartmentService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private readonly router: Router) { }


  ngOnInit(): void {
    this.buildDepartmentForm();
    this.departmentId = this.route.snapshot.paramMap.get('id');
    if (this.departmentId) {
      this.getDepartmentDetail(this.departmentId);
    }
  }

  buildDepartmentForm() {
    this.createDepartmentForm = this.fb.group({
      name: new FormControl(''),
      subtitle: new FormControl(''),
      summary: new FormControl(''),
      logo: new FormControl(''),
      backgroundImage: new FormControl(''),
      locationId: new FormControl('')
    })
  }

  saveDepartment() {
    if (this.departmentId) {
      this.departmentService.updateDepartment(this.createDepartmentForm.value, this.departmentId).subscribe(data => {
        this.showMessage();
      });
    }
    else {
      this.departmentService.createDepartment(this.createDepartmentForm.value).subscribe(data => {
        this.showMessage();
      });
      this.showMessage();
    }
  }

  getDepartmentDetail(departmentId: string) {
    this.departmentService.getDepartment(departmentId).subscribe(dept => {
      this.createDepartmentForm.patchValue(dept);
    })
  }

  showMessage() {
    if (this.departmentId) {
      this.messageService.add({
        severity: "success",
        summary: "Updated",
        detail: "Department updated successfully"
      });
    }
    else {
      this.messageService.add({
        severity: "success",
        summary: "Saved",
        detail: "Created department successfully"
      });
    }
    setTimeout(() => {
      this.router.navigate(['/department']);
    }, 1200);
  }


}
