import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeComponent } from './exchange/exchange.component';



const routes: Routes = [{ path: "cyexchange",
children:[{path:"",component: ExchangeComponent},
]}];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyexchangeRoutingModule { }
export const Cyexchange =[ExchangeComponent];