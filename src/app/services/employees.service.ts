import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Response } from 'src/app/models/response.model';
import { Cls } from 'src/app/models/cls.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl: string = environment.baseApiUrl;
 // responseUrl: string = environment.responseUrl;
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employee');
  }
  postEmployee(addEmployee: Employee): Observable<Employee> {
    addEmployee.id ='00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl + '/api/employee', addEmployee);
  }
  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/employee/' + id);
  }
  updateEmployeeById(id: string, updateData: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/employee/' + id, updateData);
  }
  deleteEmployeeById(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + '/api/employee/' + id);
  }
  searchEmployee(searchtxt: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/Employee/search?searchtxt=' + searchtxt);
  }
  getResponse(): Observable<Cls[]> {
    return this.http.get<Cls[]>( 'http://192.168.1.39:800/api/employee/udpcimbackup');
  }
  
}
