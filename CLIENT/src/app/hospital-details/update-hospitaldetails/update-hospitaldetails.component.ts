import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../service.service'; 

@Component({
  selector: 'app-update-hospitaldetails',
  templateUrl: './update-hospitaldetails.component.html',
  styleUrls: ['./update-hospitaldetails.component.scss']
})
export class UpdateHospitaldetailsComponent implements OnInit {
  
  
  hospitalForm: FormGroup;
  submit = false;
  hospitalDetails:any;


  constructor( private hospitalservice:ServiceService,private router:Router, private route:ActivatedRoute ) { 
    
  }
  getHospital(hospitalValue) {
    this.hospitalservice.hospitalDetails(hospitalValue)
      .subscribe(data => {
        this.hospitalDetails = data;
        //console.log("Form data",this.hospitalDetails);
        this.hospitalForm.setValue({
          hospitalId: this.hospitalDetails.hospitalId,
          hospitalName: this.hospitalDetails.hospitalName,
          PhoneNo: this.hospitalDetails.PhoneNo,
          address: this.hospitalDetails.address,
          latitude: this.hospitalDetails.latitude,
          longitude: this.hospitalDetails.longitude
          
        });
      })
    }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.getHospital(params.data);
    });
    this.hospitalForm=new FormGroup({
      hospitalId:new FormControl("",Validators.required),
      hospitalName:new FormControl("",Validators.required),
      PhoneNo:new FormControl("",Validators.required),
      address:new FormControl("",Validators.required),
      latitude:new FormControl("",Validators.required),
      longitude:new FormControl("",Validators.required)
    })
  }
  
    onSubmit() {
      this.submit = true;
      const hospitalId = this.hospitalForm.value.hospitalId;
      const hospitalBody = this.hospitalForm.value;
      // if (this.hospitalForm.invalid) {
      //   console.log("return");
      //   return;
      // } else {
        this.hospitalservice.updateHospitalDetails( hospitalId , hospitalBody ).subscribe(
          res => {
            alert("Hospital details update Successfully")
           
          },
          err => {
            
          });
      // }
     }
  
  }


  

