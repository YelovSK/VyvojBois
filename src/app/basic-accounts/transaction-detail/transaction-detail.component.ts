import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Transaction, TransactionsService} from "../../services/transactions.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  Id: number = -1;
  transaction!: Transaction;
  form = new FormGroup({
    accountNumber: new FormControl(),
    amount: new FormControl(),
    issueDate: new FormControl()
  });
  private routeSub!: Subscription;

  constructor(private route: ActivatedRoute, private transactionService: TransactionsService) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.Id = params['transactionId'];
    });

    this.transactionService.getTransaction(this.Id).subscribe(
      data => {
        this.transaction = data;
        this.form.setValue({
          accountNumber: this.transaction.accountNumber ?? "",
          amount: this.transaction.amount ?? "",
          issueDate: this.transaction.issueDate ?? ""
        });
      }
    );

  }

}
