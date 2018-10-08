import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { ProjectComponent } from './project/project.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contactUS', component: ContactUsComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
