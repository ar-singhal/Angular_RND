import { Injectable } from '@angular/core';
import { Stripe } from '@stripe/stripe-js';


@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  public stripe: Stripe;

  constructor() {
    this.initStripe();
  }

  private async initStripe() {
    this.stripe = await import('@stripe/stripe-js');
  }
}
