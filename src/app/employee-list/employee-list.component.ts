import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  /*employees: Employee[] = [
    {
      empid: 'AW001',
      fname: 'Angular',
      lname: 'Test',
      email: 'Angularweb@asp.net',
      branch:'Trainee'
    },
    {
      empid: 'AW002',
      fname: 'Angular',
      lname: 'Web',
      email: 'Angularweb@asp.net',
      branch: 'IT'
    }

  ];*/
  employees: Employee[] = [];
  searchtxt: string = "" ;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    
    this.employeesService.getEmployee().subscribe({
      next: (e) => {
        this.employees = e;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
  search() {
    this.employeesService.searchEmployee(this.searchtxt).subscribe({
      next: (e) => {
        this.employees = e;
        console.log(e);
        
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
