import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { CustomerComponent } from './customer/customer.component';
// import { CustomerviewComponent } from './customerview/customerview.component';


const routes: Routes = [{ path: "othercustomers",  
children:[{path:"",component: CustomerComponent },
// {path:"customerview", component: CustomerviewComponent}
]}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthercustomersRoutingModule { }

export const Othercustomers= [ CustomerComponent ]