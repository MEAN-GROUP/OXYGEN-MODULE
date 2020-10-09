import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { OthercustomersRoutingModule,Othercustomers } from './othercustomers-routing.module';
// import { CustomerComponent } from './customer/customer.component';
// import { CustomerviewComponent } from './customerview/customerview.component';


@NgModule({
  declarations: [  Othercustomers ],
  imports: [
    CommonModule,
    OthercustomersRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  exports:[CommonModule,
    FormsModule,
     ReactiveFormsModule]
})

export class OthercustomersModule { }
