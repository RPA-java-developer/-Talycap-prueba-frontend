import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id:number;
  customer:Customer = new Customer();
  constructor(private route:ActivatedRoute, private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.customer = dato;
    }, error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/customers']);
  }

  onSubmit(){
    this.customerService.actualizarEmpleado(this.id, this.customer).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    }, error => console.log(error));
  }


}
