import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Groundlogistics } from '../groundlogistics';
import { GroundlogisticsService } from '../groundlogistics.service';

@Component({
  selector: 'app-land-logistics-details',
  templateUrl: './land-logistics-details.component.html',
  styleUrls: ['./land-logistics-details.component.css']
})
export class LandLogisticsDetailsComponent implements OnInit {

  id:number;
  ground_logistics:Groundlogistics;

  constructor(private groLogisticsService:GroundlogisticsService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ground_logistics = new Groundlogistics();
    this.groLogisticsService.obtenerEnvioPorId(this.id).subscribe(
      dato => {
        this.ground_logistics = dato;
      }
    )
  }

  verDetallesDelEmpleado(id:number){
    this.router.navigate(['details-customer',id]);
  }    

}
