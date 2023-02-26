import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvailabilityCheck } from '../models/availability-check.model';


const baseUrl = 'http://localhost:8101';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  putDoctorStatus(aval:AvailabilityCheck): Observable<string> {
    return this.http.put(`${baseUrl}/DoctorAvailability`, aval, {responseType: 'text'});
  }

}