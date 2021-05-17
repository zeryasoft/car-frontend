import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl="https://localhost:44397/api/";

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"Cars/getById?carId=1";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByCarId(carId:Number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"Cars/getById?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}
