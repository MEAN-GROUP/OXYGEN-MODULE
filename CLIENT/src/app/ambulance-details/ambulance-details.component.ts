import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ambulance-details',
  templateUrl: './ambulance-details.component.html',
  styleUrls: ['./ambulance-details.component.scss']
})
export class AmbulanceDetailsComponent implements OnInit {

  constructor(private view:ServiceService ,private router:Router) { }

  // details;
 
  //X=false;  

  // A(){
  //  this.view.ambulanceDetails(this.details).subscribe(data =>
  //  {
  //    this.result = JSON.parse(JSON.stringify(data));
  //    console.log(data);
  //  });
  //  this.X=true;
   
  // }
  result:any; 
  details:any;
  ngOnInit( ): void {
    this.view.ambulanceDetails().subscribe(data =>
      {
        this.result = JSON.parse(JSON.stringify(data));
        console.log(data);
      });
      this.details = {};
    //this.result={}
  }
  viewAmbulanceDetails(item) {
    this.details = item;
  }

  editdata(ambulanceId)
  {
  
       this.router.navigate(['/ambulanceUpdateDetails'],{queryParams:{data:ambulanceId}});
  } 

  delete(ambulanceId){
      this.view.deleteAmbulance(ambulanceId).subscribe( result => {
        console.log(result)
        alert("Driver details delete Successfully")
      });
  }

} 