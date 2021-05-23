import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImageDetail } from 'src/app/models/carimagedetail';
import { CarImageDetailService } from 'src/app/services/carimagedetailservice.service';
import { CarService } from 'src/app/services/carservice.service';

@Component({
  selector: 'app-carimagedetail',
  templateUrl: './carimagedetail.component.html',
  styleUrls: ['./carimagedetail.component.css'],
})
export class CarImageDetailComponent implements OnInit {
  carimagedetails: CarImageDetail[] = [];
  currentCarImageDetail: CarImageDetail;
  defaultPath = 'https://localhost:44397';
  car:Car;

  constructor(private carService:CarService,
    private carImageDetailService: CarImageDetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImagesDetailsByCarId(params['carId']);
        this.getCarsByCarId(params['carId']);
      }
    });
  }

  getCarImagesDetailsByCarId(carId: Number) {
    this.carImageDetailService
      .getCarImagesDetailsByCarId(carId)
      .subscribe((respose) => {
        this.carimagedetails = respose.data;
      });
  }
  getCarsByCarId(carId:number){
    this.carService.getCarDetailsById(carId).subscribe(response=>{
      this.car = response.data[0];
    })
  }
}
