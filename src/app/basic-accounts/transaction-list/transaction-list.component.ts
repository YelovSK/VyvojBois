import { Component, OnInit } from '@angular/core';
import {Transaction, TransactionsService} from "../../services/transactions.service";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions!: Transaction[];
  displayedColumns: string[] = ['Meno', 'Typ transakcie', 'Ucet', 'Hodnota', 'Akcia'];

  constructor(private transactionService: TransactionsService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(
      data => this.transactions = data
    );

    this.transactionService.getTransaction(1).subscribe(
      data => console.log(data)
    );
  }

  // showDetail(element: Transaction) {
  //   let id = element.transactionId;
  //   this.router.navigate(['/transaction-detail', id]);
  //   window.location.href = '/basic-accounts/transaction-detail/' + id;
  // }
}
