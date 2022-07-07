import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Groundlogistics } from '../groundlogistics';
import { GroundlogisticsService } from '../groundlogistics.service';

@Component({
  selector: 'app-update-list-logistics',
  templateUrl: './update-list-logistics.component.html',
  styleUrls: ['./update-list-logistics.component.css']
})
export class UpdateListLogisticsComponent implements OnInit {

  id:number;
  gl_envio:Groundlogistics = new Groundlogistics();
  constructor(private grologisticsService:GroundlogisticsService, private route:ActivatedRoute, private router:Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.grologisticsService.obtenerEnvioPorId(this.id).subscribe(dato => {
      this. gl_envio = dato;
    }, error => console.log(error));    
  }

  irAlaListaDeEnvios(){
    this.router.navigate(['/list-land-logistics']);
  }

  onSubmit(){
    this.grologisticsService.actualizarEnvio(this.id, this.gl_envio).subscribe(dato => {
      this.irAlaListaDeEnvios();
    }, error => console.log(error));
  }  

}
