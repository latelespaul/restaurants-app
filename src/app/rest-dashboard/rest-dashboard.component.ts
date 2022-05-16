import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rest-dashboard',
  templateUrl: './rest-dashboard.component.html',
  styleUrls: ['./rest-dashboard.component.css']
})
export class RestDashboardComponent implements OnInit {

  formValue!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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

}
