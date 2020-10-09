import { Component, OnInit } from '@angular/core';
import { CylinderService }  from '../../cylinder.service';
import { Router,ActivatedRoute } from '@angular/router';
import { mscylinderdata } from '../../mscylinderdata';

 
@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.scss']
})
export class CustomerviewComponent implements OnInit {
  viewdata: any;
    data= new mscylinderdata("", 0, "", 0,"" ,"" ,"");


  constructor( private add: CylinderService, 
    private router: Router, 
    private route:  ActivatedRoute) { }

  ngOnInit(): void {this.route.queryParams.subscribe((Params) => {
    this.viewdata = JSON.parse(Params.data);
    this.data.cylinderType = this.viewdata.cylinderType;
    this.data.quantity = this.viewdata.quantity;
    this.data.accessories = this.viewdata.accessories;
    this.data.accQuantity = this.viewdata.accQuantity;
    this.data.referenceNo = this.viewdata.referenceNo;
    this.data.address = this.viewdata.address;
    this.data.remark = this.viewdata.remark;
  })
}

onadd()
{
  this.add.insertmscylinderdata(this.data).subscribe( result => {
    console.log('success', result);
    this.router.navigate(['/othercustomers']);
  },
    error =>{
       console.error('Error', error);
       alert(error);
      }
  );
 }

}



