import { Injectable } from '@angular/core';
import {hospitalData}  from './hospital/hospitalData';
import {ambulanceData} from './ambulance/add-ambulance/ambulanceData';
import {driverData} from './driver/driverData';
//import{bookingData} from './booked-ambulance/bookingData'
import { HttpClient }  from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  insertHospitalData(data:hospitalData): Observable<any>{
    return this.http.post('http://localhost:3005/ambulanceData/addHospital',data);
  }

  addAmbulance(data: ambulanceData): Observable<any> {
   return this.http.post('http://localhost:3005/ambulanceData/addAmbulance',data);
  }
  getAmbulanceList(hospitalId, ambCoordinatorId): Observable<any> {
    return this.http.get(`http://localhost:3005/ambulanceData/getAmbulanceList/${hospitalId}/${ambCoordinatorId}`);
  }
insertDriverData(data:driverData): Observable<any>{
  return this.http.post('http://localhost:3005/ambulanceData/driverData',data);
 
}
insertBookingData(data): Observable<any>{
  return this.http.post('http://localhost:3005/ambulanceData/ambulanceBookingDetails',data);
 
}
hospitalList(): Observable<any>{
  return this.http.get('http://localhost:3005/ambulanceData/getHospitalData/');
}
hospitalDetails(id): Observable<any>{
  return this.http.get('http://localhost:3005/ambulanceData/getHospitalDetails/' +id);
}
updateHospitalDetails(id,hospitalBody): Observable<any> {
  return this.http.put('http://localhost:3005/ambulanceData/updateHospitalDetail/' +id , hospitalBody);
}

deleteHospitalDetails(id): Observable<any> {
  return this.http.delete('http://localhost:3005/ambulanceData/deleteHospitalData/' +id);
}

ambulanceDetails(): Observable<any> {
  return this.http.get('http://localhost:3005/ambulanceData/getambulanceData/');
}

ambulanceEditDetails(id): Observable<any> {
  return this.http.get('http://localhost:3005/ambulanceData/getAmbulanceDetails/' +id);
}
updateAmbulanceDetail(ambulanceId , ambulanceBody ): Observable<any> {
  return this.http.put(`http://localhost:3005/ambulanceData/updateAmbulanceDetail/${ambulanceId}`, ambulanceBody);
}
deleteAmbulance(ambulanceId): Observable<any> {
  return this.http.delete(`http://localhost:3005/ambulanceData/deleteAmbulance/${ambulanceId}`);
}

bookingDetails(): Observable<any>{
  return this.http.get('http://localhost:3005/ambulanceData/getBookingDetails/');
}
cancelAmbulance(bookingId, ambulanceId): Observable<any> {
  const url = 'http://localhost:3005/ambulanceData/cancelAmbulanceBooking/' + bookingId;
  return this.http.put(url, { ambulanceId: ambulanceId });  
}
bookingEditDetails(id): Observable<any>{
  return this.http.get('http://localhost:3005/ambulanceData/getUpdateBookingDetails/' +id);
}
updatebookingdata( id , bookingBody ): Observable<any>{
  return this.http.put('http://localhost:3005/ambulanceData/updateBookingDetail/' +id , bookingBody);
}


driverDetails(): Observable<any>{
  return this.http.get('http://localhost:3005/ambulanceData/getDriverDetails/');
}
driverEditDetails(id): Observable<any>{
  return this.http.get('http://localhost:3005/ambulanceData/getDriverUpdateDetails/' +id);
}
updateDriverdata( id , driverBody ): Observable<any>{
  return this.http.put('http://localhost:3005/ambulanceData/updateDriverDetail/' +id , driverBody);
}
deleteDriverDetails(id): Observable<any>{
  return this.http.delete('http://localhost:3005/ambulanceData/deleteDriverData/' +id);
}






// patientList(id):Observable<any>{
//   return this.http.get('http://localhost:3005/ambulanceData/getPatientsList/'+id);
// }

// updateAmbulanceDetails(ambulanceData):Observable<any> {

//   const url='http://localhost:3005/ambulanceData/updateAmbulanceLocations/'+ambulanceData.ambulanceId;
//   return this.http.put(url, ambulanceData); 
// };

// bookedAmbulance():Observable<any>{
//   return this.http.get('http://localhost:3005/ambulanceData/getBookedAmbulance/');
  
// }
// availableAmbulance():Observable<any>{
//   return this.http.get('http://localhost:3005/ambulanceData/getAvailableAmbulance/');
  
// }

// addAssignDriverData(data):Observable<any>{
//   return this.http.post('http://localhost:3005/ambulanceData/assignDriver/',data);
// }

}