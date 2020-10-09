import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeRequestComponent } from './exchange-request/exchange-request.component';


const routes: Routes = [{ path: "exchangerequest",  
children:[{path:"",component: ExchangeRequestComponent }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRequestRoutingModule { }

export const Exchangerequest= [ ExchangeRequestComponent ]