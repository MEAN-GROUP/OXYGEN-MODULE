import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../service.service'; 

@Component({
  selector: 'app-update-booking-data',
  templateUrl: './update-booking-data.component.html',
  styleUrls: ['./update-booking-data.component.scss']
})
export class UpdateBookingDataComponent implements OnInit {

   
  bookingForm: FormGroup;
  submit = false;
  bookingDetails:any;

  constructor( private bookingservice:ServiceService,private router:Router, private route:ActivatedRoute ) { }

  getBooking(bookingid) {
    this.bookingservice.bookingEditDetails(bookingid)
      .subscribe(data => {
        this.bookingDetails = data;
        this.bookingForm.setValue({
          bookingId: this.bookingDetails.bookingId,
          patientName: this.bookingDetails.patientName,
          age: this.bookingDetails.age,
          ambulanceType: this.bookingDetails.ambulanceType,
          mobile: this.bookingDetails.mobile,
          address: this.bookingDetails.address
          
        });
      })
    }
    ngOnInit(): void {
      this.route.queryParams.subscribe((params) => {
        this.getBooking(params.data);
      });
      this.bookingForm=new FormGroup({
        bookingId: new FormControl("",Validators.required),
        patientName: new FormControl("",Validators.required),
        age: new FormControl("",Validators.required),
        ambulanceType: new FormControl("",Validators.required),
        mobile: new FormControl("",Validators.required),
        address:  new FormControl("",Validators.required)
      })
    }

    onSubmit() {
      this.submit = true;
      const bookingId = this.bookingForm.value.bookingId;
      const bookingBody = this.bookingForm.value;
      // if (this.hospitalForm.invalid) {
      //   console.log("return");
      //   return;
      // } else {
        this.bookingservice.updatebookingdata( bookingId , bookingBody ).subscribe(
          res => {
            alert("Booking detAILS update Successfully")
           
          },
          err => {
            
          });
      // }
     }
  
  }
