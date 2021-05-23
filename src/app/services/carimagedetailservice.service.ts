import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImageDetail } from '../models/carimagedetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageDetailService {

  apiUrl='https://localhost:44397/api/';

  constructor(private httpClient:HttpClient) { }

  getCarImagesDetailsByCarId(carId:Number):Observable<ListResponseModel<CarImageDetail>>{
    let newPath=this.apiUrl+'carimages/getimagesbycarId?carId='+carId;
    return this.httpClient.get<ListResponseModel<CarImageDetail>>(newPath)
  }
}
