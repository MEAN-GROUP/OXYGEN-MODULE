import { Component, OnInit } from '@angular/core';
import { CylinderService }  from '../../cylinder.service';
import { Router,ActivatedRoute } from '@angular/router';
import { cylinderdata } from '../../cylinderdata';
@Component({
  selector: 'app-entrypageview',
  templateUrl: './entrypageview.component.html',
  styleUrls: ['./entrypageview.component.scss']
})
export class EntrypageviewComponent implements OnInit {
    // viewdata: any;
    // data = new cylinderdata("", 0);

  constructor(
    private add: CylinderService, 
    private router: Router, 
    private route:  ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe((Params) => {
    //   this.viewdata = JSON.parse(Params.data);
    //   this.data.cylinderType = this.viewdata.cylinderType;
    //   this.data.quantity = this.viewdata.quantity;
    // })
  }
}

// onadd()
// {
//   this.add.insertcylinderdata(this.data).subscribe( result => {
//     console.log('success', result);
//     this.router.navigate(['/addcylinder']);
//   },
//     error =>{
//        console.error('Error', error);
//        alert(error);
//       }
//   );
// }

// }


