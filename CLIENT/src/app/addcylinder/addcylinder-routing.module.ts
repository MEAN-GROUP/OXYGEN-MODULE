import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrypageComponent } from './entrypage/entrypage.component';
import { EntrypageviewComponent } from './entrypageview/entrypageview.component';

const routes: Routes = [{ path:"addcylinder",
children:[{path:"",component: EntrypageComponent},
//  {path:"entrypageview", component: EntrypageviewComponent} 
]}];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class AddcylinderRoutingModule { }
export const Addcylinder=[ EntrypageComponent];