import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  customer : Customer = new Customer();
  constructor() { }

  ngOnInit(): void {
    console.log("estoy en register customer");
  }

  onSubmit(){
    console.log(this.customer);
  }


}
