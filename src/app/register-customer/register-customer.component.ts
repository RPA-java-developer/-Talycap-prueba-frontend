import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  customer : Customer = new Customer();
  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    console.log("estoy en register customer");
  }

  saveCustomer(){
    this.customerService.registerCustomer(this.customer).subscribe(dato => {
      console.log(dato);
      this.goToCustomersList();
    }, 
    error => console.log(error));
  }

  goToCustomersList(){
    this.router.navigate(['/customers']);
  }


  onSubmit(){
    //console.log(this.customer);
    this.saveCustomer();
  }


}
