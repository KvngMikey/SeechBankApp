import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { IPaid, IPayment } from './shared/payment.model';
import { PaymentService } from './shared/payment.service';

@Component({
  selector: 'payments-list',
  templateUrl: './payments-list.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .btn {
        width: 384px;
        height: 56px;
        margin-left: 240px;
        margin-right: 272px;
        border-radius: 20px;
        background-color: #8660c1;
        font-weight: 500;
        font-size: 19px;
        color: #ffffff;
      }
      .search-box {
        border-radius: 16px;
      }

      .list-group-item {
        background-color: #f7f2ff;
      }

      .dialog-header {
        font-weight: 500;
        font-style: italic;
      }
    `,
  ],
})
export class PaymentsListComponent implements OnInit {
  payments: IPayment[];
  amount;
  recipient;
  description;
  mouseoverPayment;
  paymentForm;
  searchTerm: string = '';
  foundPayments: IPaid[];

  constructor(
    private paymentService: PaymentService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.paymentService.getPayments().subscribe((payments) => {
      this.payments = payments;
    });
  }

  public searchPayments(searchTerm) {
    this.paymentService.searchPayments(searchTerm).subscribe((payments) => {
      this.foundPayments = payments;
    });
  }

  public payment(formValues) {
    this.payments.unshift({
      name: formValues.recipient,
      desc: formValues.description || ' ',
      date: '22 March, 2021 | 23:51',
      amount: formValues.amount + '.00',
    });
    this.toastrService.success('Payment Processed');
  }
}
