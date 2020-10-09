import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderlistComponent } from './orderlist/orderlist.component';



const routes: Routes = [{ path: "orderlist", 
children:[{path:"",component:OrderlistComponent}]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderlisthospitalRoutingModule{ }

export const Orderlisthospital= [ OrderlistComponent]