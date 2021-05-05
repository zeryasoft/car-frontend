import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
    car1:any={id:1, brandId:1, colorId:1, modelYear:2020, dailyPrice:23500, description:"Opel Corsa"};
    car2:any={id:2, brandId:2, colorId:1, modelYear:2021, dailyPrice:60500, description:"Hyundai Getz"};
  
    cars=[this.car1,
          this.car2
        ];

  constructor() { }

  ngOnInit(): void {
  }

}
