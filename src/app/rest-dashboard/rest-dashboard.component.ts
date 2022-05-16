import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestaurantModel } from '../model/restaurant/restaurant.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-rest-dashboard',
  templateUrl: './rest-dashboard.component.html',
  styleUrls: ['./rest-dashboard.component.css']
})
export class RestDashboardComponent implements OnInit {

  formValue!: FormGroup;
  restaurantModelObject: RestaurantModel = new RestaurantModel;
  getAllDataModel: any;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllData();
    this.formValue = this.formBuilder.group(
      {
        name: [''],
        email: [''],
        mobile: [''],
        address: [''],
        services: ['']
      }
    )
  }
  addRestaurant() {
    this.restaurantModelObject.name = this.formValue.value.name;
    this.restaurantModelObject.email = this.formValue.value.email;
    this.restaurantModelObject.mobile = this.formValue.value.mobile;
    this.restaurantModelObject.address = this.formValue.value.address;
    this.restaurantModelObject.services = this.formValue.value.services;
    this.api.postRestaurant(this.restaurantModelObject).subscribe(
      res => {
        console.log(res);
        alert("Restaurant Record added 😃");
        this.formValue.reset();
        this.getAllData();
      },
      err => {
        alert("Kuch to gadbad hai daya 🥶");
      }
    )
  }

  getAllData() {
    this.api.getRestaurant().subscribe(res => {

      this.getAllDataModel = res;
    }
    )
  }

  deleteData(item:any){ 
      this.api.deleteRestaurant(item.id).subscribe(res=>{
        alert("Data Deleted Successfully");
        this.getAllData();
      })
  }
  onEditRestaurant(item:any){
    console.log("edit")
    this.formValue.controls['name'].setValue(item.name);
    this.formValue.controls['email'].setValue(item.email);
    this.formValue.controls['mobile'].setValue(item.mobile);
    this.formValue.controls['address'].setValue(item.address);
    this.formValue.controls['services'].setValue(item.services);
    this.formValue.controls['address'].setValue(item.address);
  }

}
