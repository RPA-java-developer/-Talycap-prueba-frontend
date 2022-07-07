import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCustomersComponent } from './list-customers/list-customers.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ListLandLogisticsComponent } from './list-land-logistics/list-land-logistics.component';
import { RegisterGroundLogisticsComponent } from './register-ground-logistics/register-ground-logistics.component';
import { LandLogisticsDetailsComponent } from './land-logistics-details/land-logistics-details.component';
import { UpdateListLogisticsComponent } from './update-list-logistics/update-list-logistics.component';

const routes: Routes = [
  {path: "customers", component:ListCustomersComponent},
  {path: "", redirectTo:"customers", pathMatch:'full'},
  {path: "register-customer", component:RegisterCustomerComponent},
  {path: "update-customer/:id", component:UpdateCustomerComponent},
  {path: "details-customer/:id", component:DetailsCustomerComponent},
  {path: "list-land-logistics", component:ListLandLogisticsComponent},
  {path: "register-ground-logistics", component:RegisterGroundLogisticsComponent},
  {path: "land-logistics-details/:id", component:LandLogisticsDetailsComponent},
  {path: "update-list-logistics/:id", component:UpdateListLogisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
