import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEmployeeComponent } from './employee-list/edit-employee/edit-employee.component';
import { ResponseTimeComponent } from './response-time/response-time.component';
import { WebcamComponent } from './webcam/webcam.component';
import { WebcamModule } from 'ngx-webcam';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { PaymentComponent } from './payment/payment.component';
import { environment } from '../environments/environment';
import { NgxStripeModule } from 'ngx-stripe';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailureComponent } from './payment-failure/payment-failure.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RazorpayPaymentComponent } from './razorpay-payment/razorpay-payment.component';

LOAD_WASM().subscribe();

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    EmployeeListComponent,
    EditEmployeeComponent,
    ResponseTimeComponent,
    WebcamComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    PaymentFailureComponent,
    PagenotfoundComponent,
    RazorpayPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule,
    NgxScannerQrcodeModule,
    NgxStripeModule.forRoot('pk_test_51OEQZuSIypgXl1SaC03uRH7wi41S07J0Q4Be7CeS7woI3e0UcTikTtjHCMIbJspKsV61GahTJXSbOEhixrxDAG2700YDTzXv70')
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
