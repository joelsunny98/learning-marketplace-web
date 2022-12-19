import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Department } from 'src/app/shared/models/department';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.scss']
})
export class ViewDepartmentComponent {
[x: string]: any;
  departments! : Department[];

  constructor(private departmentService : DepartmentService, private primengConfig : PrimeNGConfig) { }

  ngOnInit() {
    this.departmentService.getDepartmentList().subscribe(data => {
      this.departments = data;
    });
    
    this.primengConfig.ripple = true;
  }
}
