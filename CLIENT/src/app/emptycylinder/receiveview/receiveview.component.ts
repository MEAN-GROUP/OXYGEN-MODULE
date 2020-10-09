import { Component, OnInit } from '@angular/core';
import { CylinderService }  from '../../cylinder.service';
import { Router,ActivatedRoute } from '@angular/router';
import { cylinderdata } from '../../cylinderdata';

@Component({
  selector: 'app-receiveview',
  templateUrl: './receiveview.component.html',
  styleUrls: ['./receiveview.component.scss']
})
export class ReceiveviewComponent implements OnInit {

 viewdata: any;
    data = new cylinderdata("", 0);

  constructor(
    private add: CylinderService, 
    private router: Router, 
    private route:  ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((Params) => {
      this.viewdata = JSON.parse(Params.data);
      this.data.cylinderType = this.viewdata.cylinderType;
      this.data.quantity = this.viewdata.quantity;
    })
  }

onadd()
{
  this.add.insertemptycylinderdata(this.data).subscribe( result => {
    console.log('success', result);
    this.router.navigate(['/emptycylinder']);
  },
    error =>{
       console.error('Error', error);
       alert(error);
      }
  );
}

}
