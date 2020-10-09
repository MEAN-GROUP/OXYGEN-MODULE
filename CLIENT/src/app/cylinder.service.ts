import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { cylinderdata } from './cylinderdata';
// import { mscylinderdata } from './mscylinderdata';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CylinderService {

  constructor(private http: HttpClient) { }

  //mypart
  addFilledCylinders(data): Observable<any> {
    return this.http.post('http://localhost:3006/oxygen/addFilledOxyCylinders', data);
  }

  addBlankOxyCylinders(data): Observable<any> {
    return this.http.post('http://localhost:3006/oxygen/addBlankOxyCylinders', data);
  }

  getOxyCyStockList(oxygenSupplierId): Observable<any> {
    return this.http.get('http://localhost:3006/oxygen/getOxyCyStockList?oxygenSupplierId='+oxygenSupplierId);
  }

  getOrderList(): Observable<any> {
    return this.http.get('http://localhost:3006/oxygen/getOrderList');
  }


  getOrderDetail(): Observable<any> {
    return this.http.get('http://localhost:3006/oxygen/getOrderDetail');

  }

  insertmscylinderdata(data): Observable<any> {
    console.log(data)
    return this.http.post('http://localhost:3006/oxygen/addMiscellaneousDelivery', data);
  }

  cylinderExchange(cylinderType, data): Observable<any> {
    return this.http.put('http://localhost:3006/oxygen/cylinderExchange/' + cylinderType, data);
  }

  deliverboyDetail(data): Observable<any> {
    console.log(data)
    return this.http.post('http://localhost:3006/oxygen/deliverboyDetail', data);
  }
  deliverboyDetailUpdate(data): Observable<any> {
    return this.http.post('http://localhost:3006/oxygen/deliverboyDetailUpdate', data);
  }
  getExchangeRequestList(): Observable<any> {
    return this.http.get('http://localhost:3006/oxygen/getExchangeRequestList');
  }

  getdeliverystaffList(oxygenSupplierId): Observable<any> {
    console.log(oxygenSupplierId+"oxygenSupplierId")
    return this.http.get('http://localhost:3006/oxygen/getdeliverystaffList?oxygenSupplierId='+oxygenSupplierId);
  }

  adddeliveryorderdata(data: cylinderdata): Observable<any> {
    return this.http.post('http://localhost:3006/oxygen/addDeliverOrder', data);
  }

  updatedeliverstaffData(data): Observable<any> {
    return this.http.put('http://localhost:3006/oxygen/addDeliverOrder', data);
  }

  deliverstaffDelete(Id): Observable<any> {
    return this.http.delete('http://localhost:3006/oxygen/deliverstaffDelete/' + Id);
  }

}

