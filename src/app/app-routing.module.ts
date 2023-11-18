import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EditEmployeeComponent } from './employee-list/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ResponseTimeComponent } from './response-time/response-time.component';
import { WebcamComponent } from './webcam/webcam.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-list/edit/:id', component: EditEmployeeComponent },
  { path: 'response-time', component: ResponseTimeComponent },
  { path: 'app-webcam', component: WebcamComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
