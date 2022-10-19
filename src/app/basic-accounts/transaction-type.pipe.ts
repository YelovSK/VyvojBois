import { Pipe, PipeTransform } from '@angular/core';
import {Transaction} from "../services/transactions.service";

@Pipe({
  name: 'transactionType'
})
export class TransactionTypePipe implements PipeTransform {

  transform(value: Transaction, ...args: unknown[]): unknown {
    let id = value.transactionId;
    switch (id) {
      case 0: return 'DEBIT transaction';
      case 1: return 'ATM withdrawal';
      default: return '';
    }
  }

}
