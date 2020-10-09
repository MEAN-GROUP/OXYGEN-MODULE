import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../service.service';

@Component({
  selector: 'app-add-bookindata',
  templateUrl: './add-bookindata.component.html',
  styleUrls: ['./add-bookindata.component.scss']
})
export class AddBookindataComponent implements OnInit {

  hospitalId:string;
  ambulanceId:string;
  patientId:string;
  patientName:string;
  age:number;
  guardianName:string;
  latitude:number;
  longitude:number;
  dateTime:Date;
  ambulanceType:string;
  mobile:number;
  address:string;
  status:string;

  constructor( private Bookingservice:ServiceService , private router:Router , private route:ActivatedRoute ) {}
    bookingdata=new FormGroup({
      hospitalId:new FormControl("",Validators.required),
        ambulanceId:new FormControl("",Validators.required), 
        patientId:new FormControl("",Validators.required),
        patientName:new FormControl("",Validators.required),
        age:new FormControl("",Validators.required),
        guardianName:new FormControl("",Validators.required),
        latitude:new FormControl("",Validators.required), 
        longitude:new FormControl("",Validators.required),
        dateTime:new FormControl("",Validators.required),
        ambulanceType:new FormControl("",Validators.required),
        mobile:new FormControl("",Validators.required),
        address:new FormControl("",Validators.required),
        status:new FormControl("",Validators.required),
      })
      
   insertData()
  {
    this.Bookingservice.insertBookingData(this.bookingdata.value).subscribe( result => {
      alert("Data Added Successful");
    })
  }
  

  ngOnInit(): void {
  }

}



