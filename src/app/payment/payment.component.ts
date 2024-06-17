import { Component } from '@angular/core';
import { PaymentService } from './payement.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentData = {
    studentName: '',
    studentId: '',
    amount: 0,
    cardNumber: '',
    expiryDate: '',
    cvc: ''
  };

  successMessage: string | null = null;

  constructor(private paymentService: PaymentService) {}

  onSubmit() {
    this.paymentService.processPayment(this.paymentData)
      .subscribe(
        (response: any) => {
          console.log('Payment successful', response);
          this.successMessage = 'Payment was successful!';
          this.clearForm();
        },
        (error: any) => {
          console.error('Payment error', error);
          this.successMessage = 'There was an error processing your payment. Please try again.';
        }
      );
  }

  clearForm() {
    this.paymentData = {
      studentName: '',
      studentId: '',
      amount: 0,
      cardNumber: '',
      expiryDate: '',
      cvc: ''
    };
  }
}
