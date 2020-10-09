import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockdetailsComponent } from './stockdetails/stockdetails.component';


const routes: Routes = [{ path: "stockdetail",
children:[{path:"",component:StockdetailsComponent } 
 ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockdetailRoutingModule { }

export const Stockdetail= [ StockdetailsComponent ]