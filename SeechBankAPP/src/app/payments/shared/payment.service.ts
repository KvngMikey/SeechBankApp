import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IPaid, IPayment } from './payment.model';

Injectable();
export class PaymentService {
  getPayments(): Observable<IPayment[]> {
    let subject = new Subject<IPayment[]>();
    setTimeout(() => {
      subject.next(PAYMENTS);
      subject.complete();
    }, 2000);
    return subject;
  }

  searchPayments(searchTerm: string) {
    const term = searchTerm.toLocaleLowerCase();
    let results: IPaid[] = [];

    PAYMENTS.forEach((payment) => {
      let matchingPayment = payment.paid?.filter(
        (paidd) => paidd.name.toLocaleLowerCase().indexOf(term) > -1
      );
      results = results.concat(matchingPayment);
    });
    const emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results);
    }, 100);
    return emitter;
  }
}

const PAYMENTS: IPayment[] = [
  {
    name: 'John Doe',
    desc: 'Lorem ipsum trans multi dan short ehn come',
    date: '22 March, 2021 | 23:51',
    amount: '100.00',
    paid: [
      {
        name: 'John Doe',
        desc: 'Lorem ipsum trans multi dan short ehn come',
        date: '22 March, 2021 | 23:51',
        amount: '100.00',
      },
    ],
  },
  {
    name: 'Peter Doe',
    desc: 'Lorem ipsum trans multi dan short ehn come',
    date: '22 March, 2021 | 23:51',
    amount: '200.00',
    paid: [
      {
        name: 'Peter Doe',
        desc: 'Lorem ipsum trans multi dan short ehn come',
        date: '22 March, 2021 | 23:51',
        amount: '200.00',
      },
    ],
  },
  {
    name: 'William David',
    desc: 'Lorem ipsum trans multi dan short ehn come',
    date: '22 March, 2021 | 23:51',
    amount: '100.00',
    paid: [
      {
        name: 'William David',
        desc: 'Lorem ipsum trans multi dan short ehn come',
        date: '22 March, 2021 | 23:51',
        amount: '100.00',
      },
    ],
  },
  {
    name: 'Franz Ferdinand',
    desc: 'Lorem ipsum trans multi dan short ehn come',
    date: '22 March, 2021 | 23:51',
    amount: '150.00',
    paid: [
      {
        name: 'Franz Ferdinand',
        desc: 'Lorem ipsum trans multi dan short ehn come',
        date: '22 March, 2021 | 23:51',
        amount: '150.00',
      },
    ],
  },
];
