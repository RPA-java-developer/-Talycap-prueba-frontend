import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Groundlogistics } from './groundlogistics';

@Injectable({
  providedIn: 'root'
})
export class GroundlogisticsService {
 
  // This URL get genera el listado de todos los envios en el backeng
  private baseURL = "http://localhost:9090/api/v1/groundlogistics";

  constructor(private httpClient : HttpClient) { }

  // This method is used to get a list of all logistics
  getGLogisticsList():Observable<Groundlogistics[]> {
    return this.httpClient.get<Groundlogistics[]>(`${this.baseURL}`); 
  }


  //registerGroundlogistics(groundlogistics:Groundlogistics): Observable<Object> {
  registerGroundlogistics(x:Object): Observable<Object> { 
    console.log("voy aqui....................................") 
    console.log(x) 
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    headers.append('accept', 'application/json');
    return this.httpClient.post(`${this.baseURL}`, x);
    //return this.httpClient.post(`${this.baseURL}`, Groundlogistics);
  }

    // Este metodo busca un envio por ID
    obtenerEnvioPorId(id:number):Observable<Groundlogistics>{
      return this.httpClient.get<Groundlogistics>(`${this.baseURL}/${id}`); 
    }      
  
    // Este metodo elimina un envio
    eliminarEnvio(id:number):Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`); 
    } 
    
 
    // Este metodo actualiza un envio
    actualizarEnvio(id:number, envioTierra:Groundlogistics):Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, envioTierra); 
    }     

}
