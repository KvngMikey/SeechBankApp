import { Component, Input } from '@angular/core';

@Component({
  selector: 'payments-thumbnail',
  template: `<div class="well hoverwell thumbnail">
    {{ payment.name }}
    {{ payment.desc }}
    {{ payment.date }}
    <div
      [ngStyle]="{
        color: payment.amount > 0 ? '#003300' : '#ff0000',
        'font-weight': payment.amount > 0 ? 'bold' : 'bold'
      }"
    >
      $ {{ payment.amount }}
    </div>
  </div>`,
  styles: [``],
})
export class PaymentsThumbnailComponent {
  @Input() payment: any;
}
