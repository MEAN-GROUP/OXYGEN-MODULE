import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../service.service'; 
@Component({
  selector: 'app-update-driver-data',
  templateUrl: './update-driver-data.component.html',
  styleUrls: ['./update-driver-data.component.scss']
})
export class UpdateDriverDataComponent implements OnInit {
  driverForm: FormGroup;
  submit = false;
  driverDetails:any;
  constructor(private driverservice:ServiceService,private router:Router, private route:ActivatedRoute) { }

  getDriver(driverValue) {
    this.driverservice.driverEditDetails(driverValue)
      .subscribe(data => {
        this.driverDetails = data;
       
        this.driverForm.setValue({
          driverId: this.driverDetails.driverId,
          driverName: this.driverDetails.driverName,
          dateOfBirth: this.driverDetails.dateOfBirth,
          address: this.driverDetails.address,
          licenceNo: this.driverDetails.licenceNo,
          mobile: this.driverDetails.mobile,
          gender: this.driverDetails.gender,  
        });
      })
    }
    ngOnInit(): void {
      this.route.queryParams.subscribe((params) => {
        this.getDriver(params.data);
      });
      this.driverForm=new FormGroup({
        driverId:new FormControl("",Validators.required),
        driverName:new FormControl("",Validators.required),
        dateOfBirth:new FormControl("",Validators.required),
        address:new FormControl("",Validators.required),
        licenceNo:new FormControl("",Validators.required),
        mobile:new FormControl("",Validators.required),
        gender:new FormControl("",Validators.required)
      })
    }
    onSubmit() {
      this.submit = true;
      const driverId = this.driverForm.value.driverId;
      const driverBody = this.driverForm.value;
      // if (this.hospitalForm.invalid) {
      //   console.log("return");
      //   return;
      // } else {
        this.driverservice.updateDriverdata( driverId , driverBody ).subscribe(
          res => {
            alert("Hospital details update Successfully")
           
          },
          err => {
            
          });
      // }
     }
  
  }
