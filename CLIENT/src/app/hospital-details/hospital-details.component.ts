import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.scss']
})
export class HospitalDetailsComponent implements OnInit {

  constructor(private view:ServiceService,private router:Router) { }
  
  details:any;
  result:any; 

  ngOnInit( ): void {
    this.view.hospitalList().subscribe(data =>
      {
        this.result = JSON.parse(JSON.stringify(data));
        console.log(data);
      });
      this.details = {};
  }
  viewHospitalDetails(x) {
    this.details = x;
  }

  editdata(hospitalId)
{

     this.router.navigate(['/hospitalUpdateDetails'],{queryParams:{data:hospitalId}});
} 

  delete(hospitalId){
      this.view.deleteHospitalDetails(hospitalId).subscribe( result => {
        console.log(result)
        alert("Driver details delete Successfully")
      });
  }



}
