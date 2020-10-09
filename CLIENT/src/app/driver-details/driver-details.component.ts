import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit {

  constructor(private view:ServiceService,private router:Router) { }
  
  result:any;
  details:any;

  ngOnInit( ): void {
    this.view.driverDetails().subscribe(data =>
      {
        this.result = JSON.parse(JSON.stringify(data));
        console.log(data);
      });
      this.details = {};
  }
  viewDriverDetails(item) {
    this.details = item;
  }
  editdata(driverId)
  {
       this.router.navigate(['/updateDriverDetails'],{queryParams:{data:driverId}});
  } 
  delete(driverId){
      this.view.deleteDriverDetails(driverId).subscribe( result => {
        console.log(result)
        alert("Driver details delete Successfully")
      });
  }


}
