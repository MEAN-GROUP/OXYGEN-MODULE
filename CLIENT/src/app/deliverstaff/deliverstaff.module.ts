import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { DeliverstaffRoutingModule, Deliverstafflist } from './deliverstaff-routing.module';

// import { DeliverstafflistComponent } from './deliverstafflist/deliverstafflist.component';


@NgModule({
  declarations: [ Deliverstafflist],
  imports: [
    CommonModule,
    DeliverstaffRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class DeliverstaffModule { }
