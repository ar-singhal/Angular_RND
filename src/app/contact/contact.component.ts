import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../services/employees.service';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  /*empid = "";
  fname = "";
  lname = "";
  email = "";
  branch = "";

  onSubmit() {
    console.log('Registration form submitted!');
    console.log(`Employee ID:  ${this.empid}`);
    console.log(`First Name:   ${this.fname}`);
    console.log(`Last Name:    ${this.lname}`);
    console.log(`Email:        ${this.email}`);
    console.log(`Branch:       ${this.branch}`);
  }
  clearData() {
    this.empid = "";
    
    this.fname= "";
    this.lname= "";
    this.email = "";
    this.branch = "";

    
    
  }*/
  user: any;
  loggedIn: any;
  addEmployee: Employee = {
    id: '',
    fname:'',
    lname:'',
    email:'',
    branch:''
  }

  constructor(private employeesService: EmployeesService, private router: Router, private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['/login-success']));
  }
  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  add() {
    this.employeesService.postEmployee(this.addEmployee).subscribe({
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
