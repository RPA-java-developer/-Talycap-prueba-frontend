import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListCustomersComponent } from './list-customers/list-customers.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import { ListLandLogisticsComponent } from './list-land-logistics/list-land-logistics.component';
import { RegisterGroundLogisticsComponent } from './register-ground-logistics/register-ground-logistics.component';
import { LandLogisticsDetailsComponent } from './land-logistics-details/land-logistics-details.component';
import { UpdateListLogisticsComponent } from './update-list-logistics/update-list-logistics.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomersComponent,
    RegisterCustomerComponent,
    UpdateCustomerComponent,
    DetailsCustomerComponent,
    ListLandLogisticsComponent,
    RegisterGroundLogisticsComponent,
    LandLogisticsDetailsComponent,
    UpdateListLogisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
