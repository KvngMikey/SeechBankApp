import { Component, Input } from '@angular/core';

@Component({
  selector: 'payments-thumbnail',
  template: `<div class="well hoverwell thumbnail">
    <div class="name">
      {{ payment.name }}
    </div>
    <div class="desc">
      {{ payment.desc }}
    </div>
    <div class="date">
      {{ payment.date }}
    </div>
    <div
      class="amount"
      [ngStyle]="{
        color: payment.amount > 0 ? '#218A18' : '#ff0000',
        'font-weight': payment.amount > 0 ? 'bold' : 'bold'
      }"
    >
      $ {{ payment.amount }}
    </div>
  </div>`,
  styles: [
    `
      .thumbnail {
        background-color: #f7f2ff;
      }
      .name {
        color: #171d33;
        font-style: bold;
        font-weight: 500;
        font-size: 15px;
      }

      .desc,
      .date {
        font-weight: normal;
        font-size: 12px;
        color: #757f8c;
      }

      .date {
        margin-left: 84%;
        margin-top: -5%;
      }

      .amount {
        font-style: bold;
        font-weight: 700;
        font-size: 20px;
        margin-left: 88%;
      }
    `,
  ],
})
export class PaymentsThumbnailComponent {
  @Input() payment: any;
}
