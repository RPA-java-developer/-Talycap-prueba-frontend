import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCustomersComponent } from './list-customers/list-customers.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {path: "customers", component:ListCustomersComponent},
  {path: "", redirectTo:"customers", pathMatch:'full'},
  {path: "register-customer", component:RegisterCustomerComponent},
  {path: "update-customer/:id", component:UpdateCustomerComponent},
  {path: "details-customer/:id", component:DetailsCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
