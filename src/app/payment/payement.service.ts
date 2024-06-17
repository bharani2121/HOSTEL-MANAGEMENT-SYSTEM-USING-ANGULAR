import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:3002/api/payments'; // Ensure this URL is correct

  constructor(private http: HttpClient) {}

  processPayment(paymentData: any): Observable<any> {
    return this.http.post(this.apiUrl, paymentData);
  }
}
