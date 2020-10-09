import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CylinderService }  from '../../cylinder.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  cylinderType: any;
  quantity: number;
  defectDetectedFrom:string;
  remark:string;
  exchange : FormGroup;
  constructor(  private cylinderService: CylinderService, private router:Router,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.cylinderType = "";
    this.defectDetectedFrom="";
    this.exchange = new FormGroup({
      cylinderType: new FormControl("", Validators.required),
      quantity: new FormControl("", Validators.required),
      defectDetectedFrom: new FormControl("", Validators.required),
      remark:new FormControl("", Validators.required),
      oxygenSupplierId:new FormControl("oxsup2")
    })

  }
  onadd() {
    if(this.exchange.valid) {
      console.log(this.cylinderType);
            this.cylinderService.cylinderExchange(this.cylinderType ,this.exchange.value).subscribe( result => {
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



