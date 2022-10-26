import { Pipe, PipeTransform } from '@angular/core';
import {Transaction} from "../services/transactions.service";

@Pipe({
  name: 'transactionType'
})
export class TransactionTypePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    switch (value) {
      case 0: return 'DEBIT transaction';
      case 1: return 'ATM withdrawal';
      default: return '';
    }
  }

}
