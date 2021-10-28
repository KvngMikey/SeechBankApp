import { Component, OnInit } from '@angular/core';
import { PaymentService } from './shared/payment.service';

@Component({
  selector: 'payments-list',
  template: ` <div class="row">
    <div *ngFor="let payment of payments" class="col-md-12">
      <payments-thumbnail [payment]="payment"></payments-thumbnail>
    </div>
  </div>`,
})
export class PaymentsListComponent implements OnInit {
  payments: any;
  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    this.paymentService.getPayments().subscribe((payments) => {
      this.payments = payments;
    });
  }

  // payments = [
  //   {
  //     name: 'John Doe',
  //     desc: 'Lorem ipsum trans multi dan short ehn come',
  //     date: '22 March, 2021 | 23:51',
  //     amount: '100.00',
  //   },
  //   {
  //     name: 'Peter Doe',
  //     desc: 'Lorem ipsum trans multi dan short ehn come',
  //     date: '22 March, 2021 | 23:51',
  //     amount: '200.00',
  //   },
  //   {
  //     name: 'William David',
  //     desc: 'Lorem ipsum trans multi dan short ehn come',
  //     date: '22 March, 2021 | 23:51',
  //     amount: '100.00',
  //   },
  //   {
  //     name: 'Franz Ferdinand',
  //     desc: 'Lorem ipsum trans multi dan short ehn come',
  //     date: '22 March, 2021 | 23:51',
  //     amount: '150.00',
  //   },
  // ];

  // public onPay() {
  //   this.payments.push({
  //     name: 'John',
  //     desc: 'loren ipsum',
  //     date: '22 March, 2021',
  //     amount: 200,
  //   });
  // }
}
