import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaymentsListComponent } from './payments/payments-list.component';
import { PaymentsThumbnailComponent } from './payments/payments-thumbnail.component';
import { PaymentService } from './payments/shared/payment.service';
import { ToastrService } from './common/toastr.service';
@NgModule({
  declarations: [
    AppComponent,
    PaymentsListComponent,
    PaymentsThumbnailComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [PaymentService, ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
