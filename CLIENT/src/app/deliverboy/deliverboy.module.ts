import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { DeliverboyRoutingModule, Deliverboy} from './deliverboy-routing.module';

// import { DeliveryboydetailComponent } from './deliveryboydetail/deliveryboydetail.component';


@NgModule({
  declarations: [ Deliverboy ],
  imports: [
    CommonModule,
    DeliverboyRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports:[ CommonModule,
  
    FormsModule, 
    ReactiveFormsModule]
})
export class DeliverboyModule { }
