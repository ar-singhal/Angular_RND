import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  EmployeeDetail: Employee = {
    id: '',
    fname: '',
    lname: '',
    email: '',
    branch: ''
  }

  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.employeeService.getEmployeeById(id).subscribe({
            next: (e) => {
              this.EmployeeDetail = e;
              console.log(this.EmployeeDetail);
            }
          });
        }
      }
    });
  }

  update() {
    this.employeeService.updateEmployeeById(this.EmployeeDetail.id, this.EmployeeDetail).subscribe({
      next: (e) => {
        console.log(e);
        this.router.navigate(['employee-list']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
    /*delete () {
      this.employeeService.deleteEmployeeById(this.EmployeeDetail.id).subscribe({
        next: (e) => {
          console.log(e);
          this.router.navigate(['employee-list']);
        },
        error: (response) => {
          console.log(response);
        }
      });
    }*/
  deleteEmp(id: String) {
    this.employeeService.deleteEmployeeById(this.EmployeeDetail.id).subscribe({
        next: (e) => {
          console.log(e);
          this.router.navigate(['employee-list']);
        },
        error: (response) => {
          console.log(response);
        }
      });
    }


  



}
