import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  cardetails:CarDetail[]=[];
  currentCarDetail:CarDetail;

  constructor(
    private carDetailService:CardetailService, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailsByCarId(params["carId"]);
      }   
      else{
        this.getCarDetails();
      }  
    })
  }
  
  getCarDetailsByCarId(carId:Number){
    this.carDetailService.getCarDetailsByCarId(carId).subscribe(respose=>{
      this.cardetails=respose.data;
    })
  }

  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.cardetails=response.data;
    })
  }
}
