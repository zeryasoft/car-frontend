import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
    
    cars:Car[]=[];
    dataLoaded=false;
    currentCar:Car;

  constructor(
    private carService:CarService, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars();
      }
    })
  }
  getCarsByColor(colorId: Number) {
    this.carService.getCarsByColorId(colorId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByBrand(brandId:Number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }


  

  setCurrentCar(car:Car){
    this.currentCar=car;
  }
  
  getCarDetails(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  getCurrentCarDetailClass(car:Car){
    if(car==this.currentCar){
      return "clickable-row"
    }
    else{
      return "row"
    }
  }
}
