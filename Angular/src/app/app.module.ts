import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TimeModule } from './time/time.module';
import { ExpenseModule } from './expense/expense.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimeModule,
    ExpenseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
