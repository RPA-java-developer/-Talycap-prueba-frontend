import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';

const routes: Routes = [
  {path: "customers", component:ListCustomersComponent},
  {path: "", redirectTo:"customers", pathMatch:'full'},
  {path: "register-customer", component:RegisterCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
