import { Component, OnInit } from '@angular/core';
import { CylinderService }  from '../../cylinder.service';
import { Router} from '@angular/router';
import { cylinderdata } from '../../cylinderdata';


@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {

  // orderlist:any;
  //  viewdetail:any;
orderdata:any;
viewdetail:any;
deliverdata: any;
oxygenSupplierId:any;
 
  constructor(private router: Router ,private cylinderService: CylinderService) { }

  // ngOnInit(): void {
//     this.view.getOrderList().subscribe((data)=> 
//     this. orderlist=JSON.parse(JSON.stringify(data)));
//     console.log("confirm");
  
//   this.viewdetail={};
//   }
// order(x){
//   this.viewdetail=x;
// }
// }
adddeliveryorder(){
  console.log(this.data);   
   this.cylinderService.adddeliveryorderdata(this.data).subscribe( result => {
      console.log('sucess', result);
      alert('Delivery order list added succefully.');
     this.data = new cylinderdata("","","","",0,"",0,"",0,"");

    },
    error =>console.error('Error', error)
    
  );
}
  ngOnInit(): void {

    let resp = this.cylinderService.getOrderList().subscribe((data)=>{ 
    this.orderdata = JSON.parse(JSON.stringify(data))
    });
    this.viewdetail = {};
    this.oxygenSupplierId = "oxsup1";
    let res = this.cylinderService.getdeliverystaffList(this.oxygenSupplierId).subscribe((data)=>{ 
      this.deliverdata = JSON.parse(JSON.stringify(data))
      });
  }
orderdetails(x){
  this.viewdetail = x;
  this.data.patientName = this.viewdetail.patientName;
  this.data.patientId = this.viewdetail.patientId;
  this.data.fathername = this.viewdetail.fatherName;
  this.data.cylinderType = this.viewdetail.cylinderType;
  this.data.quantity=this.viewdetail.quantity;
  this.data.dateTime = this.viewdetail.dateTime;
  this.data.mobileNo = this.viewdetail.mobileNo;
  this.data.address = this.viewdetail.address;
  this.data.pincode=this.viewdetail.pincode;
  }
  data = new cylinderdata("","","","",0,"",0,"",0,"");
  }