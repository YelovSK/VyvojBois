import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAccountsRoutingModule } from './basic-accounts-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';


@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionDetailComponent
  ],
  exports: [
    TransactionListComponent
  ],
  imports: [
    CommonModule,
    BasicAccountsRoutingModule
  ]
})
export class BasicAccountsModule { }
