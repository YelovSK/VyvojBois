import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export interface Transaction {
    accountNumber: string;
    amount: number;
    bankCode: string;
    fullName: string;
    issueDate: Date;
    transactionId: number;
    transactionType?: string;
}

interface TransactionDatas {
    data: Transaction[];
}

interface TransactionData {
    data: Transaction;
}


@Injectable({
    providedIn: 'root'
})
export class TransactionsService {

    private transactionUrl = '/api/transaction';

    constructor(private http: HttpClient) {
    }

    getTransactions(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(this.transactionUrl).pipe(map(x => x));
    }

    getTransaction(id: number): Observable<Transaction> {
        return this.http.get<Transaction>(this.transactionUrl + '/' + id).pipe(map(x => x));
    }
}
