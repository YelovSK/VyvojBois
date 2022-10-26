import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BasicAccountsRoutingModule} from './basic-accounts-routing.module';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {TransactionDetailComponent} from './transaction-detail/transaction-detail.component';
import {TransactionTypePipe} from "./transaction-type.pipe";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionDetailComponent,
    TransactionTypePipe
  ],
  exports: [
    TransactionListComponent
  ],
  imports: [
    CommonModule,
    BasicAccountsRoutingModule,
    MaterialModule
  ]
})
export class BasicAccountsModule {
}
