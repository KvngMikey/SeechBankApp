import { Component, OnInit } from '@angular/core';
import { IPayment } from './shared/payment.model';
import { PaymentService } from './shared/payment.service';

@Component({
  selector: 'payments-list',
  template: ` <div class="row">
      <div class="col-md-12">
        <form
          #paymentForm="ngForm"
          (ngSubmit)="payment(paymentForm.value)"
          autocomplete="off"
        >
          <div class="form-group">
            <label for="userName">Amount:</label>
            <input
              (ngModel)="(amount)"
              name="amount"
              id="amount"
              type="number"
              class="form-control"
              placeholder="Amount"
            />
          </div>
          <div class="form-group">
            <label for="userName">User Name:</label>
            <input
              (ngModel)="(recipient)"
              name="recipient"
              id="recipient"
              type="text"
              class="form-control"
              placeholder="Recipient"
            />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              (ngModel)="(description)"
              name="description"
              id="description"
              type="text"
              class="form-control"
              placeholder="Description (optional)"
            />
          </div>
          <br />
          <button type="submit" class="btn">Confirm</button>
        </form>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div class="row">
      <div class="col-md-12">
        <form id="searchForm" class="search">
          <div class="form-group">
            <input
              type="text"
              row="5"
              class="form-control search-box"
              placeholder="search transactions"
            />
          </div>
          <div class="search-div">
            <img
              src="../../assets/search_black_24dp.svg"
              alt=""
              class="search-icon"
            />
          </div>
        </form>
      </div>
      <div *ngFor="let payment of payments" class="col-md-12">
        <payments-thumbnail [payment]="payment"></payments-thumbnail>
      </div>
    </div>`,
  styles: [
    `
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
    `,
  ],
})
export class PaymentsListComponent implements OnInit {
  payments: IPayment[];
  amount;
  recipient;
  description;
  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    this.paymentService.getPayments().subscribe((payments) => {
      this.payments = payments;
    });
  }

  // paymentss = [
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

  public payment(formValues) {
    console.log(formValues);
    console.log(formValues.recipient);
    this.payments.unshift({
      name: formValues.recipient,
      desc: formValues.description || ' ',
      date: '22 March, 2021 | 23:51',
      amount: formValues.amount + '.00',
    });
  }
}
