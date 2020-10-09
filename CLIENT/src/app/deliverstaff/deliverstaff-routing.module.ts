import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliverstafflistComponent } from './deliverstafflist/deliverstafflist.component';



const routes: Routes = [{ path: "deliverstafflist",
children:[{path:"",component:DeliverstafflistComponent}]}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliverstaffRoutingModule { }

export const Deliverstafflist=[DeliverstafflistComponent];