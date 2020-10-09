import { Component, OnInit } from '@angular/core';
import { CylinderService }  from '../../cylinder.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-stockdetails',
  templateUrl: './stockdetails.component.html',
  styleUrls: ['./stockdetails.component.scss']
})
export class stockdetailsComponent implements OnInit {
   
  stockdata:any;
  oxygenSupplierId:any;

  // data = new cylinderdata("", 0);

  constructor(private router: Router,private view: CylinderService) { }


  ngOnInit(): void { 
    this.oxygenSupplierId = "oxsup1";
    let resp = this.view.getOxyCyStockList(this.oxygenSupplierId).subscribe((data)=> 
    this.stockdata=JSON.parse(JSON.stringify(data)));
  }

} 