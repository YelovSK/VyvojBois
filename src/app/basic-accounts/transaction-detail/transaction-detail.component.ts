import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Transaction, TransactionsService} from "../../services/transactions.service";

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  Id: number = -1;
  transaction!: Transaction;
  private routeSub!: Subscription;

  constructor(private route: ActivatedRoute, private transactionService: TransactionsService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.Id = params['transactionId'];
    });

    this.transactionService.getTransaction(this.Id).subscribe(
      data => {
        this.transaction = data;
      }
    );
  }

}
