import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { AddcylinderRoutingModule, Addcylinder } from './addcylinder-routing.module';

// import { EntrypageComponent } from './entrypage/entrypage.component';
// import { EntrypageviewComponent } from './entrypageview/entrypageview.component';


@NgModule({
  declarations: [Addcylinder],
  imports: [
    CommonModule,
    AddcylinderRoutingModule,FormsModule, ReactiveFormsModule 
  ], 
  exports:[CommonModule,
    FormsModule,
     ReactiveFormsModule ]
})
export class AddcylinderModule { }
