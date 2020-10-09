import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CylinderService } from '../../cylinder.service';

@Component({
  selector: 'app-deliveryboydetail',
  templateUrl: './deliveryboydetail.component.html',
  styleUrls: ['./deliveryboydetail.component.scss']
})
export class AddDeliverboyComponent implements OnInit {
  deliverboyName:string;
  dateOfBirth:Date;
  gender:string;
  licenceNo:string;
  fathername:string;
  address:string;
  email:string;
  deliveryboydetail:FormGroup;

  constructor(private cylinderService: CylinderService, private router: Router, private route: ActivatedRoute) { }
     
    ngOnInit(): void {
     this.deliveryboydetail = new FormGroup({
      deliveryboyName:new FormControl("",Validators.required), 
      dateOfBirth:new FormControl("", Validators.required),
      gender:new FormControl("",Validators.required),
      licenceNo:new FormControl("",Validators.required),
      mobileNo:new FormControl("",Validators.required),
      address:new FormControl("",Validators.required),
      fathername:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      oxygenSupplierId:new FormControl("oxsup1")
      })
    }
  
 
 adddeliveryperson()
  {
    this.cylinderService. deliverboyDetail(this.deliveryboydetail.value).subscribe( result => {
      alert("Data Added Successful");
    })
  }




  
}