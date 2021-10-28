import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaymentsListComponent } from './payments/payments-list.component';
import { PaymentsThumbnailComponent } from './payments/payments-thumbnail.component';
import { PaymentService } from './payments/shared/payment.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentsListComponent,
    PaymentsThumbnailComponent,
  ],
  imports: [BrowserModule],
  providers: [PaymentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
