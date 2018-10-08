import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { ProjectComponent } from './project/project.component';
import { CartComponent } from './cart/cart.component';

import { UserModule } from './user/user.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { ElModule } from 'element-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    ProjectComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserModule,
    ContactUsModule,
    FormsModule,
    ElModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
