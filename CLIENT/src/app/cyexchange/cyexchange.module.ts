import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { CyexchangeRoutingModule,Cyexchange } from './cyexchange-routing.module';
// import { ExchangeComponent } from './exchange/exchange.component';



@NgModule({
  declarations: [Cyexchange],
  imports: [
    CommonModule,
    CyexchangeRoutingModule,
    FormsModule, 
    ReactiveFormsModule

  ]
})
export class CyexchangeModule { }
