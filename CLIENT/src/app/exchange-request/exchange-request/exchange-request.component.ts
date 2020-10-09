import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CylinderService }  from '../../cylinder.service';

@Component({
  selector: 'app-exchange-request',
  templateUrl: './exchange-request.component.html',
  styleUrls: ['./exchange-request.component.scss']
})
export class ExchangeRequestComponent implements OnInit {
  exchangeRequestList: any;
 viewdetails: any;

  constructor(private router: Router ,private cylinderService : CylinderService) { }

  ngOnInit(): void {
    this.cylinderService.getExchangeRequestList().subscribe((data)=>{ 
      this.exchangeRequestList = JSON.parse(JSON.stringify(data));
      console.log(this.exchangeRequestList);

    });
      this.viewdetails ={};
    }

  exchangedetails(x)
  {
  this.viewdetails = x;
  }
}


