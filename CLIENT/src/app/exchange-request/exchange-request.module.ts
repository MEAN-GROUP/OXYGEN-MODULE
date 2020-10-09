import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { ExchangeRequestRoutingModule , Exchangerequest} from './exchange-request-routing.module';


@NgModule({
  declarations: [ Exchangerequest],
  imports: [
    CommonModule,
    ExchangeRequestRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports:[CommonModule,
    FormsModule,
     ReactiveFormsModule ]
})
export class ExchangeRequestModule { }
