import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carimage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl='https://localhost:44397/api/';

  constructor(private httpClient:HttpClient) { }

  getCarImagesByCarId(carId:Number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+'carimages/getbycarid?carId='+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
