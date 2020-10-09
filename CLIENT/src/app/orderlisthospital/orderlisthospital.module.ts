import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { OrderlisthospitalRoutingModule,Orderlisthospital } from './orderlisthospital-routing.module';
// import { OrderlistComponent } from './orderlist/orderlist.component';



@NgModule({
  declarations: [Orderlisthospital],
  imports: [
    CommonModule,
    OrderlisthospitalRoutingModule,
    FormsModule, ReactiveFormsModule 
  ],
  exports:[CommonModule]
})
export class OrderlisthospitalModule { }
