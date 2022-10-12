import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BasicAccountsModule} from "./basic-accounts/basic-accounts.module";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent},
  { path: "basic-accounts", loadChildren: () => import('./basic-accounts/basic-accounts.module').then(m => m.BasicAccountsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
