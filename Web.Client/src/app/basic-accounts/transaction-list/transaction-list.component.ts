import {Component, OnInit} from '@angular/core';
import {Transaction, TransactionsService} from "../../services/transactions.service";

@Component({
    selector: 'app-transaction-list',
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

    transactions!: Transaction[];
    displayedColumns: string[] = ['Meno', 'Typ transakcie', 'Ucet', 'Hodnota', 'Akcia'];

    constructor(private transactionService: TransactionsService) {
    }

    ngOnInit(): void {
        this.transactionService.getTransactions().subscribe(
            data => {
              this.transactions = data;
              console.log(data);
            }
        );
    }
}
