import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';


import { OrderdetailRoutingModule,Orderdetail } from './orderdetail-routing.module';
// import { OrderdetailsComponent } from './orderdetails/orderdetails.component';


@NgModule({
  declarations: [Orderdetail],
  imports: [
    CommonModule,
    OrderdetailRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class OrderdetailModule { }
