import { Component, OnInit } from '@angular/core';
import { CylinderService }  from '../../cylinder.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {
orderdata:any;
viewdetail:any;
 
  constructor(private router: Router,private cylinderService: CylinderService) { }
  
  // orderdetail;
  // result:any;
  // viewdetail:any; 
  // order=false;  

  // orders(){
  //   console.log("confim");
  //  this.cylinderService. getOrderDetail(this. orderdetail). subscribe( data =>
  //  {
  //    this.result = JSON.parse(JSON.stringify(data));
  //    console.log(data);
  //  });
  
  //  this.order=true;
   
  // }

  // ngOnInit(): void {
  //   let resp = this.viewdetail. getOrderDetail().subscribe((data)=> 
  //    this. orderdetail=JSON.parse(JSON.stringify(data)));
  //    console.log(resp);
  //  }
  
//   this.result={}
// }


ngOnInit(): void {

  let resp = this.cylinderService.getOrderList().subscribe((data)=>{ 
  this.orderdata = JSON.parse(JSON.stringify(data))
  });
  this.viewdetail = {};
}
orderdetails(x)
{
this.viewdetail = x;
}



}