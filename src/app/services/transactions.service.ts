import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Transaction {
  transactionId: number;
  fullName: string;
  transactionType: number;
  accountNumber: number;
  bankCode: number;
  issueDate: Date;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private transactionUrl = '/api/transactions';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionUrl);
  }

  getTransaction(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(this.transactionUrl + '/' + id);
  }
}
