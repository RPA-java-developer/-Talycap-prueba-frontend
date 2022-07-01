import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customers:Customer[];
  
  constructor(private customerService:CustomerService, private router:Router) { }
  
  ngOnInit(): void {

    /*
    this.customers = [
      {
        "customer_id": 79435106,
        "name": "Rodrigoxxx",
        "email": "rodrigo@correo.comxxx",
        "movil": "3133830906xxx",
        "address": "Carrera con callexxx",
        "password": "123xxx"
      },
      {
        "customer_id": 999888777,
        "name": "Zazerinaxxx",
        "email": "correo@hot.comxxx",
        "movil": "11112222333xx",
        "address": "direccionxxx",
        "password": "987xxx"
      }     
    ];
    */
   
    /*
    const studentsObservable = this.customerService.getStudents();

    studentsObservable.subscribe((studentsData: Customer[]) => {
        this.customers = studentsData;
        console.log(" se listan los estudiantes ")
    });
    */

    this.obtenerEmpleados();
  }

  
  private obtenerEmpleados() {
    this.customerService.getCustomerList().subscribe(dato => {
      this.customers = dato;
    });
  }
  
  actualizarEmpleado(id:number){
    this.router.navigate(['update-customer',id]);
  }

  eliminarEmpleado(id:number){
    console.log("voy por aqui en el componente LISTA... solo pulso el boton..");
    this.customerService.eliminarEmpleado(id).subscribe((dato: any) => {
      console.log(dato);
      this.obtenerEmpleados();    
    })
  }

}
