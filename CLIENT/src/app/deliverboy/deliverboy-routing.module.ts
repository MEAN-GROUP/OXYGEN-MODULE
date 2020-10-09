import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryboydetailComponent } from './deliveryboydetail/deliveryboydetail.component';


const routes: Routes = [{ path: "deliverboy",
 children:[{path:"",component: DeliveryboydetailComponent }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliverboyRoutingModule { }

export const Deliverboy=[DeliveryboydetailComponent];