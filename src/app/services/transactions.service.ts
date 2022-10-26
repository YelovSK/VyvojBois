import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export interface Transaction {
  data: {
    transactionId: number;
    fullName: string;
    transactionType: number;
    accountNumber: number;
    bankCode: number;
    issueDate: Date;
    amount: number;
  }
}

interface TransactionDatas{
  data: Transaction[];
}

interface TransactionData{
  data: Transaction;
}


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private transactionUrl = '/api/transactions';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<TransactionDatas>(this.transactionUrl).pipe(map(x => x.data));
  }

  getTransaction(id: number): Observable<Transaction> {
    return this.http.get<TransactionData>(this.transactionUrl + '/' + id).pipe(map(x => x.data));
  }
}
