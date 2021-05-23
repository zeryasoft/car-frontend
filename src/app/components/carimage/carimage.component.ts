import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carimage';
import { CarimageService } from 'src/app/services/carimage.service';
import { CarService } from 'src/app/services/carservice.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {

  carimages:CarImage[]=[];
  currentcarimages:CarImage;
  defaultPath = 'https://localhost:44397';
  car!:Car;
  
  constructor(
    private carService:CarService,
    private carImageService:CarimageService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImagesByCarId(params['carId']);
        this.getCarsByCarId(params['carId']);
      }
    });
  }

  getCarImagesByCarId(carId: Number) {
    this.carImageService
      .getCarImagesByCarId(carId)
      .subscribe((respose) => {
        this.carimages = respose.data;
      });
  }
  getCarsByCarId(carId:number){
    this.carService.getCarDetailsById(carId).subscribe(response=>{
      this.car = response.data[0];
    })
  }

}
