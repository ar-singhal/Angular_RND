import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  
})
export class PaymentComponent implements OnInit {

  private stripePromise: Promise<any>;

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  

  constructor( private stripeService: StripeService) { }

  ngOnInit(): void {
    this.stripePromise = this.loadStripe();
  }
  private async loadStripe() {
    const stripe = await import('@stripe/stripe-js');
    return stripe.loadStripe('pk_test_51OEQZuSIypgXl1SaC03uRH7wi41S07J0Q4Be7CeS7woI3e0UcTikTtjHCMIbJspKsV61GahTJXSbOEhixrxDAG2700YDTzXv70'); // Replace with your actual Stripe Publishable Key
  }

  async initiatePayment() {
    const stripe = await this.stripePromise;
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        items: [{ sku: 'sku_123', quantity: 1 }], // Replace with your actual product details
        successUrl: 'http://localhost:4200/payment-success', // Replace with your success URL
        cancelUrl: 'http://localhost:4200/payment-failed', // Replace with your cancel URL
      });

      if (error) {
        console.error(error);
      }
    }
  }

  

  

  createToken(): void {
    const name='TechAryan'
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

  

  
 

  /*createRzpayOrder(data) {
    console.log(data);
    // call api to create order_id
    this.payWithRazor(order_id);
  }

  payWithRazor(val) {
    const options: any = {
      key: 'rzp_test_key',
      amount: 125500, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: '', // company name or product name
      description: '',  // product description
      image: './assets/logo.png', // company logo or product image
      order_id: val, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response, error) => {
      options.response = response;
      console.log(response);
      console.log(options);
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }*/

  

}







  

