import { Component, OnInit } from '@angular/core';
import {TransactionsService} from "../../services/transactions.service";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  constructor(private transactionService: TransactionsService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(
      data => console.log(data)
    );

    this.transactionService.getTransaction(1).subscribe(
      data => console.log(data)
    );
  }

}
