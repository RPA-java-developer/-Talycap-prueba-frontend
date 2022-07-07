import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Groundlogistics } from '../groundlogistics';
import { GroundlogisticsService } from '../groundlogistics.service';

@Component({
  selector: 'app-list-land-logistics',
  templateUrl: './list-land-logistics.component.html',
  styleUrls: ['./list-land-logistics.component.css']
})
export class ListLandLogisticsComponent implements OnInit {

imageSrc = './editarEnvio.jpg';

  ground_logistics:Groundlogistics[];

  constructor(private groLogisticsService:GroundlogisticsService, private router:Router) { }

  ngOnInit(): void {

    this.getListaEnvios();
  }

  private getListaEnvios() {
    this.groLogisticsService.getGLogisticsList().subscribe(dato => {
      this.ground_logistics = dato;
      console.log(this.ground_logistics);
    });
  }
  
  verDetallesEnvio(id:number){
    this.router.navigate(['land-logistics-details',id]);
  }    
    

  eliminarEnvio(id:number) {
    this.groLogisticsService.eliminarEnvio(id).subscribe((dato: any) => {
      console.log(dato);
      this.getListaEnvios(); 
    })
  }

  actualizarEnvio(id:number){
    this.router.navigate(['update-list-logistics',id]);
  }


}
