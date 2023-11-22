import { Component } from '@angular/core';

declare var Razorpay: any;

@Component({
  selector: 'app-razorpay-payment',
  templateUrl: './razorpay-payment.component.html',
  styleUrls: ['./razorpay-payment.component.css']
})
export class RazorpayPaymentComponent {
  payNow() {
    const RozarpayOptions = {
      description: 'Sample Razorpay Testing',
      currency: 'INR',
      amount: 100000,
      name: 'Areteinfo Technologies',
      key: 'rzp_test_mWWMnuCuMAppXL',
      image: 'https://i.imgur.com/FApqk3D.jpeg',
      prefill: {
        name: 'Aryan Singhal',
        email: 'ar24@gmail.com',
        phone: '9898989898'
      },
      theme: {
        color: '#6466e3'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed')
        }
      }
    }

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }

    Razorpay.open(RozarpayOptions, successCallback, failureCallback)
  }
}
