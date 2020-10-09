import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CylinderService }  from '../../cylinder.service';
@Component({
  selector: 'app-receivecylinder',
  templateUrl: './receivecylinder.component.html',
  styleUrls: ['./receivecylinder.component.scss']
})
export class ReceivecylinderComponent implements OnInit {
    
  cylinderType: string;
  quantity: number;
  receivecylinder: FormGroup;
 
  constructor(   private cylinderService: CylinderService ,private router:Router,private route:ActivatedRoute) {
    
   }

  

  ngOnInit(): void {
    this.cylinderType = "";
    this. receivecylinder = new FormGroup({
      cylinderType: new FormControl("", Validators.required),
      quantity: new FormControl("", Validators.required)
    })
  }


  onadd() {
    if(this. receivecylinder.valid) {
      this.cylinderService.addBlankOxyCylinders(this. receivecylinder.value).subscribe( result => {
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
