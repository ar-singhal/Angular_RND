import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { SharedService } from './shared.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
import { TranslationService } from './services/translation.service';
import { TranslateComponent } from './translate/translate.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgxPaginationModule } from 'ngx-pagination';

LOAD_WASM().subscribe();

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    RazorpayPaymentComponent,
    TranslateComponent,
    LoginSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule,
    NgxScannerQrcodeModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    NgxPaginationModule,
    NgxStripeModule.forRoot('pk_test_51OEQZuSIypgXl1SaC03uRH7wi41S07J0Q4Be7CeS7woI3e0UcTikTtjHCMIbJspKsV61GahTJXSbOEhixrxDAG2700YDTzXv70'),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '718808384859-stqfd4qeufame54fjbqespfdgrc68o9u.apps.googleusercontent.com'
          )
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }
    , SharedService, TranslationService],
  
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private translationService: TranslationService) {
    this.translationService.init();
  }
}
