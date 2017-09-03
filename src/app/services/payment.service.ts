import {BaseURL} from '../BaseURL';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Payment} from '../Model/payment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class PaymentService {

  private paymentURL = BaseURL.getURL() + '/payments';
  constructor(private http: Http) {}

  getPayments(): Observable<Payment[]> {
    return this.http.get(this.paymentURL).map(res => res.json() as Payment[]);
  }

}
