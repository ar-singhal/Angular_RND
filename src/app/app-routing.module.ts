import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EditEmployeeComponent } from './employee-list/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ResponseTimeComponent } from './response-time/response-time.component';
import { WebcamComponent } from './webcam/webcam.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailureComponent } from './payment-failure/payment-failure.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RazorpayPaymentComponent } from './razorpay-payment/razorpay-payment.component';
import { TranslateComponent } from './translate/translate.component';
import { LoginSuccessComponent } from './login-success/login-success.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-list/edit/:id', component: EditEmployeeComponent },
  { path: 'response-time', component: ResponseTimeComponent },
  { path: 'app-webcam', component: WebcamComponent },
  { path: 'app-payment', component: PaymentComponent },
  { path: 'app-razorpay-payment', component: RazorpayPaymentComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'payment-failed', component: PaymentFailureComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: 'app-translate', component: TranslateComponent },
  { path: 'login-success', component: LoginSuccessComponent }  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
