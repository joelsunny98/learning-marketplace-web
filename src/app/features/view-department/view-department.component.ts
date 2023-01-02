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

  items! : MenuItem[];

  constructor(private departmentService : DepartmentService, private primengConfig : PrimeNGConfig, private fb : FormBuilder) { }

  ngOnInit() {
    this.departmentService.getDepartmentList().subscribe(data => {
      this.departments = data;
    });

    this.search = this.fb.group({
      name : new FormControl('')
    });

    this.search.valueChanges.subscribe(data => {
      this.departmentService.getDepartmentList(data.name).subscribe(dat => {
        this.departments = dat;
      });
    })
    
    this.primengConfig.ripple = true;

    this.items = [
      {label: 'Update', icon: 'pi pi-refresh', command: () => {
        // Update function goes here
    }},
    {label: 'Delete', icon: 'pi pi-times', command: () => {
        // Delete Function goes here
    }},
    
    ];
  }
}
