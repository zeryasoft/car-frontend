import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImageDetail } from 'src/app/models/carimagedetail';
import { CarImageDetailService } from 'src/app/services/carimagedetailservice.service';

@Component({
  selector: 'app-carimagedetail',
  templateUrl: './carimagedetail.component.html',
  styleUrls: ['./carimagedetail.component.css'],
})
export class CarImageDetailComponent implements OnInit {
  carimagedetails: CarImageDetail[] = [];
  currentCarImageDetail: CarImageDetail;

  constructor(
    private carImageDetailService: CarImageDetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImagesDetailsByCarId(params['carId']);
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
}
