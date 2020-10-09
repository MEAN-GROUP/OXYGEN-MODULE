import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../service.service';
//import {driverData} from '../driverData'
@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent implements OnInit {
  
  driverName:string;
  dateOfBirth:Date;
  gender:string;
  licenceNo:string;
  mobile:number;
  address:string;
  

  constructor(private service: ServiceService, private router:Router, private route:ActivatedRoute ) {}
  driverdata = new FormGroup({
    driverName: new FormControl("", Validators.required), 
    dateOfBirth: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    licenceNo: new FormControl("", Validators.required),
    mobile: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required)
    })

   insertData()
  {
    this.service.insertDriverData(this.driverdata.value).subscribe( result => {
      alert(result.message);
      if(result.success === 1) {
        this.driverdata.reset()
      }
    }, error => {
      alert(error.statusText)
    })
  }
  
  ngOnInit(): void {
  }

}
