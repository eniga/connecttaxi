import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VehiclesModel, RequestModel, AddRecordResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getVehicles(){
    return this.http.get<VehiclesModel[]>(environment.api_url + 'vehicles');
  }

  submitRequest(request: RequestModel){
    return this.http.post<AddRecordResponse>(environment.api_url + 'requests', request);
  }
}
