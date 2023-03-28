import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctors_lst } from '../models/doctors-lst.model';
import { Doctor } from '../models/doctor.models';


const baseUrl = 'http://localhost:8101';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getDoctorsLst(): Observable<Doctors_lst> {
    return this.http.get<Doctors_lst>(`${baseUrl}/GetDoctorsLst`);
  }

  postDoctorDetails(doctorDetails: Doctor): Observable<string> {
    return this.http.post<string>(`${baseUrl}/PostDoctorDetails`, doctorDetails);
  }

}