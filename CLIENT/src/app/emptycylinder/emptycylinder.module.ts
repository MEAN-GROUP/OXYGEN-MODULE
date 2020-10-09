import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';


import { EmptycylinderRoutingModule, Emptycylinder } from './emptycylinder-routing.module';
//  import { ReceiveviewComponent } from './receiveview/receiveview.component';

// import { ReceivecylinderComponent} from './receivecylinder/receivecylinder.component';


@NgModule({
  declarations: [ Emptycylinder ],
  imports: [
    CommonModule,
    EmptycylinderRoutingModule,
    FormsModule, 
    ReactiveFormsModule
    
  ],
  exports:[CommonModule,
    FormsModule,
     ReactiveFormsModule ]
})
export class EmptycylinderModule { }
