import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CylinderService }  from '../../cylinder.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  cylinderType: string;
  quantity: number;
  status:string;
  remark:string;
  accessories:string;
  accQuantity:string;
  referenceNo:string;
  name:string;
  address:string;
  mobileNo:number;
  othercustomers: FormGroup;
 

  constructor( private cylinderService: CylinderService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.cylinderType="";
    this.accessories="";
    this.othercustomers = new FormGroup({
      name: new FormControl("", Validators.required),
      cylinderType: new FormControl("", Validators.required),
      quantity: new FormControl("", Validators.required),
      accessories: new FormControl(""),
      accQuantity:new FormControl(""),
      referenceNo:new FormControl("",Validators.required),
      address:new FormControl("",Validators.required),
      mobileNo:new FormControl("",Validators.required),
      oxygenSupplierId:new FormControl("oxsup2")

    })
  }


  onadd() {
    if(this. othercustomers.valid) {
      this.cylinderService. insertmscylinderdata(this. othercustomers.value).subscribe( result => {
        console.log('success', result);
        
      },
        error =>{
          console.error('Error', error);
          alert(JSON.stringify(error));
          }
      );
    } else {
      console.log("Please enter valid inputs.");
    }
  }

}






