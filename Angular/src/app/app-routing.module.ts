import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeComponent } from './time/time.component';
import { ExpenseComponent } from './expense/expense.component';



const routes: Routes = [
  { path: '', redirectTo: '/time', pathMatch: 'full' },
  { path: 'time', component: TimeComponent },
  { path: 'expense', component: ExpenseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
