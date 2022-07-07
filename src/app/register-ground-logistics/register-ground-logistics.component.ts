import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Groundlogistics } from '../groundlogistics';
import { GroundlogisticsService } from '../groundlogistics.service';

@Component({
  selector: 'app-register-ground-logistics',
  templateUrl: './register-ground-logistics.component.html',
  styleUrls: ['./register-ground-logistics.component.css']
})
export class RegisterGroundLogisticsComponent implements OnInit {

  groundlogistics : Groundlogistics = new Groundlogistics();
  customers:Customer[];

  constructor(private grologisticsService:GroundlogisticsService, private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.showAll();
    this.onSelect(this.groundlogistics.customer_id);
  }

  showAll() {
    this.customerService.getCustomerList().subscribe(dato => {
      this.customers = dato;
      console.log("lista select de customers");
      console.log(this.customers);
    });
  }

  onSelect(country_id: any) {
   console.log("paso por un select");
   console.log(country_id!.value);
   this.groundlogistics.customer_id = country_id!.value
  }

  onSubmit(){
    console.log("inicia submit -> A ")
    console.log(this.groundlogistics);
    console.log("inicia submit -> B ")
    this.groundlogistics.setCustomer( this.groundlogistics.customer_id);
    console.log(this.groundlogistics);

    this.saveGroundLogistics();
  }
  
  saveGroundLogistics() {
    console.log("inicia submit -> C ")
    console.log(this.groundlogistics);
    this.grologisticsService.registerGroundlogistics(this.groundlogistics).subscribe(dato => {
      this.goToGroundLogisticsList();
    }, 
    error => console.log(error));
  }

  goToGroundLogisticsList(){
    this.router.navigate(['/list-land-logistics']);
  }

}
