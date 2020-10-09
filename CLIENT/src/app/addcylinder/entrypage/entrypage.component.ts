import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CylinderService }  from '../../cylinder.service';
// import { cylinderdata } from '../../cylinderdata';


@Component({
  selector: 'app-entrypage',
  templateUrl: './entrypage.component.html',
  styleUrls: ['./entrypage.component.scss']
})
export class addcylinderComponent implements OnInit {
  cylinderType: string;
  quantity: number;
  entrypage: FormGroup;
 
  constructor(  private cylinderService: CylinderService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.cylinderType = "";
    this.entrypage = new FormGroup({
      cylinderType: new FormControl("", Validators.required),
      quantity: new FormControl("", Validators.required),
      oxygenSupplierId:new FormControl("oxsup1")
      
    })
  }


  onadd() {
    if(this.entrypage.valid) {

      this.cylinderService.addFilledCylinders(this.entrypage.value).subscribe( result => {
        alert("Added Successfully")
        this.cylinderType = "";
        this.quantity = undefined;
        console.log('success', result);
        // this.router.navigate(['/addcylinder']);
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




