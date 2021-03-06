import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Groundlogistics } from '../groundlogistics';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css']
})
export class DetailsCustomerComponent implements OnInit {

  id:number;
  customer:Customer;
  lg:Groundlogistics[]=[];

  constructor(private customerService:CustomerService, private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.customer = new Customer();
      console.log("estos son lo datos del customer... en vista componente");
      this.customerService.obtenerEmpleadoPorId(this.id).subscribe(dato => {
        this.customer = dato;
        this.lg = this.customer.groundLogistics;
        swal(`Detalles del empleado ${this.customer.name}`);
      })
  }
  

}
