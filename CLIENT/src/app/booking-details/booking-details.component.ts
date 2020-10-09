import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { Router,ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  constructor(private view: ServiceService, private router: Router) { }
  
  // details;
  // result:any;
  
  // X=false;
  // booking(){
  //  this.view.bookingDetails(this.details).subscribe(data =>
  //  {
  //    this.result = JSON.parse(JSON.stringify(data));
  //    console.log(data);
  //  });
  //  this.X=tru
   
  // }
  data:any;
  result:any;
  details:any;
  ngOnInit(): void {
    this.view.bookingDetails().subscribe((data) => {
      this.result = JSON.parse(JSON.stringify(data))
      console.log(data)
  });
  this.details = {};
}

  bookinglist(x){
    this.details = x;
  }
  editdata(bookingId)
  {
       this.router.navigate(['/updateBookingDetails'],{queryParams:{data:bookingId}});
  } 


  cancelAmulance(){
    this.view.cancelAmbulance(this.details.bookingId, this.details.ambulanceId).subscribe( result => {
      let response = JSON.parse(JSON.stringify(result));
      if(result.success == 0) {
        window.alert('Unable to cancel.')
      } else{
        alert('Bokking cancelled succefully.');
        //redirect to again this path here
      }
      console.log(result);
    })
  }
  

  

}

