import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { addcylinderComponent } from './addcylinder/entrypage/entrypage.component';
import { AddDeliverboyComponent } from './deliverboy/deliveryboydetail/deliveryboydetail.component';
import { stockdetailsComponent } from './stockdetail/stockdetails/stockdetails.component';
import { OrderlistComponent } from './orderlisthospital/orderlist/orderlist.component';
import { DeliverstafflistComponent } from './deliverstaff/deliverstafflist/deliverstafflist.component';
import { CustomerComponent } from './othercustomers/customer/customer.component';
import { ExchangeComponent } from './cyexchange/exchange/exchange.component';
import { ExchangeRequestComponent } from './exchange-request/exchange-request/exchange-request.component';



import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { AmbulanceDetailsComponent } from './ambulance-details/ambulance-details.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { AddAmbulanceComponent } from './ambulance/add-ambulance/add-ambulance.component';
import { AddDriverComponent } from './driver/add-driver/add-driver.component';
import { AddBookindataComponent } from './book-ambulance/add-bookindata/add-bookindata.component';

import { UpdateHospitaldetailsComponent } from './hospital-details/update-hospitaldetails/update-hospitaldetails.component';
import { AmbulanceUpdateComponent } from './ambulance-details/ambulance-update/ambulance-update.component';
import { UpdateBookingDataComponent } from './booking-details/update-booking-data/update-booking-data.component';
import { UpdateDriverDataComponent } from './driver-details/update-driver-data/update-driver-data.component';


const routes: Routes = [
  {
    path:"addcylinder", component: addcylinderComponent
  },
  {
    path:"deliverboy", component: AddDeliverboyComponent
  },
  {
    path:"stockdetail", component: stockdetailsComponent
  },
  {
    path:"orderlist", component: OrderlistComponent
  },
  {
    path:"deliverstafflist", component: DeliverstafflistComponent
  },
  {
    path:"othercustomers", component: CustomerComponent
  },
  {
    path:"cyexchange", component: ExchangeComponent
  },
  {
    path:"exchangerequest", component: ExchangeRequestComponent
  },






  {
    path:"addDriver", component: AddDriverComponent
  },
  {
    path:"bookAmbulance", component: AddBookindataComponent
  },
  {
    path:"hospitalDetails", component: HospitalDetailsComponent
  },
  {
    path:"hospitalUpdateDetails", component: UpdateHospitaldetailsComponent
  },
  {
     path:"ambulanceDetails", component: AmbulanceDetailsComponent
  },
  {
    path:"ambulanceUpdateDetails", component: AmbulanceUpdateComponent
  },
  {
    path:"bookingList", component: BookingDetailsComponent
  },
  {
    path:"updateBookingDetails", component: UpdateBookingDataComponent
  },
  {
    path:"driverDetails", component: DriverDetailsComponent
  },
  {
    path:"updateDriverDetails", component: UpdateDriverDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rootcomp = [
  addcylinderComponent, 
  AddDeliverboyComponent,
  stockdetailsComponent,
  OrderlistComponent,
  DeliverstafflistComponent,
  CustomerComponent,
  ExchangeComponent,
  ExchangeRequestComponent,

  AddAmbulanceComponent, 
  AddDriverComponent, 
  AddBookindataComponent, 
  HospitalDetailsComponent,
  UpdateHospitaldetailsComponent, 
  BookingDetailsComponent, 
  AmbulanceDetailsComponent, 
  DriverDetailsComponent,
  AmbulanceUpdateComponent, 
  UpdateBookingDataComponent, 
  UpdateDriverDataComponent
];
