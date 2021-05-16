import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ListResponseModel} from '../models/listResponseModel';
import {Observable} from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  apiUrl="https://localhost:44397/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:Number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/getcarsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
}
