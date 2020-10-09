import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../service.service';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.scss']
})
export class AddHospitalComponent implements OnInit {

  hospitalName:string;
  PhoneNo: string;
  address: string;
  pincode: any;
  latitude: string;
  longitude: string;


  constructor( private hospitalservice: ServiceService, private router: Router, private route: ActivatedRoute ) { }
  hospitaldata = new FormGroup({
    hospitalName: new FormControl("", Validators.required),
    PhoneNo: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    pincode: new FormControl("", Validators.required),
    latitude: new FormControl("", Validators.required),
    longitude: new FormControl("", Validators.required)
  })
   insertData()
  {
    this.hospitalservice.insertHospitalData(this.hospitaldata.value).subscribe( result => {
      alert(result.message);
      if(result.success === 1) {
        this.hospitaldata.reset()
      }
    }, error => {
      alert(error.statusText)
    });
}

  ngOnInit(): void {
  }

}
