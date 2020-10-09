import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../service.service'; 
@Component({
  selector: 'app-ambulance-update',
  templateUrl: './ambulance-update.component.html',
  styleUrls: ['./ambulance-update.component.scss']
})
export class AmbulanceUpdateComponent implements OnInit {
  ambulanceForm: FormGroup;
  submit = false;
  ambulanceDetails:any;

  constructor( private ambulanceservice:ServiceService,private router:Router, private route:ActivatedRoute) { }

  getAmbulance(ambulancedata) {
    this.ambulanceservice.ambulanceEditDetails(ambulancedata)
      .subscribe(data => {
        this.ambulanceDetails = data;
        
        this.ambulanceForm.setValue({
          ambulanceId: this.ambulanceDetails.ambulanceId,
          hospitalId: this.ambulanceDetails.hospitalId,
          hospitalName: this.ambulanceDetails.hospitalName,
          ambulanceNo: this.ambulanceDetails.ambulanceNo,
          ambulanceType: this.ambulanceDetails.ambulanceType,
        });
      })
    }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.getAmbulance(params.data);
    });
    this.ambulanceForm=new FormGroup({
      ambulanceId:new FormControl("",Validators.required),
      hospitalId:new FormControl("",Validators.required),
      hospitalName:new FormControl("",Validators.required),
      ambulanceNo:new FormControl("",Validators.required),
      ambulanceType:new FormControl("",Validators.required),
    })
  }
  onSubmit() {
    this.submit = true;
    const ambulanceId = this.ambulanceForm.value.ambulanceId;
    const ambulanceBody = this.ambulanceForm.value;
    // if (this.hospitalForm.invalid) {
    //   console.log("return");
    //   return;
    // } else {
      this.ambulanceservice.updateAmbulanceDetail( ambulanceId , ambulanceBody ).subscribe(
        res => {
          alert("Hospital details update Successfully")
        },
        err => {
          
        });
    // }
   }

}


