import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockdetailRoutingModule, Stockdetail  } from './stockdetail-routing.module';
// import { StockdetailsComponent } from './stockdetails/stockdetails.component';



@NgModule({
  declarations: [Stockdetail],
  imports: [
    CommonModule,
    StockdetailRoutingModule
  ]
})
export class StockdetailModule { }
