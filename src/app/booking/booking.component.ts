import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpServiceService } from '../http/http-service.service';
import { VehiclesModel } from '../models';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  isSubmitted =  false;
  formMsg = '';
  showMsg = false;
  vehicles: VehiclesModel[] = [];

  constructor(private service: HttpServiceService) { }

  ngOnInit() {
    this.getVehicles();
  }

  NewRequest(form: NgForm){
    this.formMsg = 'Your request has been submitted successfully.';
    this.showMsg = true;
    this.isSubmitted = false;
    form.resetForm();
    return false;
  }

  getVehicles(){
    this.service.getVehicles().subscribe((data) =>{
      this.vehicles = data;
    });
  }
}
