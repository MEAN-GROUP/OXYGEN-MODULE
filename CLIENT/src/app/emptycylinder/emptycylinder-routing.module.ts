import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivecylinderComponent } from './receivecylinder/receivecylinder.component';
// import { ReceiveviewComponent } from './receiveview/receiveview.component';


const routes: Routes = [{ path: "emptycylinder",  
children:[{path:"",component: ReceivecylinderComponent }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmptycylinderRoutingModule { }


export const Emptycylinder= [ ReceivecylinderComponent ]