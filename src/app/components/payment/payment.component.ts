import {Component, OnInit, Injector} from '@angular/core';
import {PaymentService} from '../../Services/payment.service';
import {Payment} from '../../Model/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments: Payment[] = [];

  constructor(private paymentService: PaymentService) {
  }

  ngOnInit() {
    this.getPayments();
  }

  getPayments() {
//    this.paymentService.getPayments().toPromise().then(payments => this.payments = payments);
    this.paymentService.getPayments().subscribe(payments => this.payments = payments);
  }
}
