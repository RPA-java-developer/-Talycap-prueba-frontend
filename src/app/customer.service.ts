import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  /*
  customers: Customer[] = [
    {
      "customer_id": 79435106,
      "name": "Rodrigo yyy",
      "email": "rodrigo@correo.com yyy",
      "movil": "3133830906 yyy",
      "address": "Carrera con calle yyy",
      "password": "123 yyy"
    },
    {
      "customer_id": 999888777,
      "name": "Zazerina yyy",
      "email": "correo@hot.com yyy",
      "movil": "11112222333 yyy",
      "address": "direccion yyy",
      "password": "987 yyy"
    }];
    */

    // This URL get genera el listado de todos los customer en el backeng
    private baseURL = "http://localhost:9090/api/v1/customers";

    constructor(private httpClient : HttpClient) { }

  // This method is used to get a list of all customers 
  getCustomerList():Observable<Customer[]> {
    /*
    const caja_customer = this.httpClient.get<Customer[]>(`${this.baseURL}`); 
    console.log("se imprime lo de la base");
    caja_customer.forEach(c => {
      console.log(c);
    });
    return caja_customer
    */
    return this.httpClient.get<Customer[]>(`${this.baseURL}`); 
  }

  
  /*
  caja_customer: Customer[];
  public getStudents(): any {
    
    const caja_customer =  this.httpClient.get<Customer[]>(`${this.baseURL}`); 
    console.log("se imprime lo de la base");
    caja_customer.forEach(c => {
      console.log(c);
    });
    
    
    //this.caja_customer.forEach( x => {
    //  console.log(">>>>>>>>>>>>>>>>>>");
    //  console.log(x);
    //});
    
      const studentsObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.customers);
                console.log("----------------------------------------");
                console.log(this.customers);
            }, 1000);
      });

      console.log("en customer.service");

      this.customers.forEach( x => {
        console.log(">>>>>>>>>>>>>>>>>>");
        console.log(x);
      });

      return studentsObservable;
  }
  */

    // This method registers a customer
    registerCustomer(customer:Customer): Observable<Object> {
      return this.httpClient.post(`${this.baseURL}`, customer);
    }
 
    // Este metodo actualiza un empleado
    actualizarEmpleado(id:number, customer:Customer):Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, customer); 
    }  
  
    // Este metodo elimina un empleado
    eliminarEmpleado(id:number):Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`); 
    }   
    
    // Este metodo busca un empleado por ID
    obtenerEmpleadoPorId(id:number):Observable<Customer>{
      return this.httpClient.get<Customer>(`${this.baseURL}/${id}`); 
    }    
  
    getAll():Observable<Customer[]> {
    //getAll(): any {
      //getCustomerList():Observable<Customer[]> {

        return this.httpClient.get<Customer[]>(`${this.baseURL}`); 

    }
  
}
