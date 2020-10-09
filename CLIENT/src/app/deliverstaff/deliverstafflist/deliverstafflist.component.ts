import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CylinderService }  from '../../cylinder.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-deliverstafflist',
  templateUrl: './deliverstafflist.component.html',
  styleUrls: ['./deliverstafflist.component.scss']
})
export class DeliverstafflistComponent implements OnInit {
 staffdata:any;
 showdetail:any;
 oxygenSupplierId:any;
 deliveryboyName: string;
 email: string;
 fathername: string;
 dob: string;
 licenceNo: string;
 mobileNo: string;
 address: string;
 gender: string;
 deliveryboydetail:FormGroup;
  constructor(private router: Router ,private cylinderService: CylinderService) { }

  ngOnInit(): void {
   
    this.oxygenSupplierId = "oxsup1";
    let resp = this.cylinderService.getdeliverystaffList(this.oxygenSupplierId).subscribe((data)=>{ 
      this.staffdata = JSON.parse(JSON.stringify(data))
      });
      this.showdetail= {};
    }
    alldatashow(){
      this.oxygenSupplierId = "oxsup1";
    let resp = this.cylinderService.getdeliverystaffList(this.oxygenSupplierId).subscribe((data)=>{ 
      this.staffdata = JSON.parse(JSON.stringify(data))
      });
      this.showdetail= {};

    }

    show(x)
    {
     
    this.showdetail = x;
     
    }

    edit(){
      
      this.deliveryboydetail = new FormGroup({
        deliveryboyName:new FormControl(this.deliveryboyName),
        email:new FormControl(this.email),
        fathername:new FormControl(this.fathername),
        dateOfBirth:new FormControl(this.dob),
        licenceNo:new FormControl(this.licenceNo),
        mobileNo:new FormControl(this.mobileNo),
        address:new FormControl(this.address),
        gender:new FormControl(this.gender),
        
        })
      console.log(this.deliveryboydetail.value)
      this.cylinderService. deliverboyDetailUpdate(this.deliveryboydetail.value).subscribe( result => {
        alert("Data Added Successful");
      })
    }

    delete(Id){
      console.log(Id)
      this.cylinderService.deliverstaffDelete(Id).subscribe(result =>{
        console.log(result);
         alert(result.message);
         this.alldatashow();
      });
      error => console.error('Error',error)
    }
    }