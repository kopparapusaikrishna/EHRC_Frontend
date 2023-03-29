import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctors_lst } from '../models/doctors-lst.model';
import { Doctor } from '../models/doctor.models';
import { Admin } from '../models/admin.model';
import { Admins_lst } from '../models/admins-lst.model';


const baseUrl = 'http://localhost:8101';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getDoctorsLst(): Observable<Doctors_lst> {
    return this.http.get<Doctors_lst>(`${baseUrl}/GetDoctorsList`);
  }

  postDoctorDetails(doctorDetails: Doctor): Observable<string> {
    return this.http.post<string>(`${baseUrl}/PostDoctorDetails`, doctorDetails);
  }

  postAdminDetails(adminDetails: Admin): Observable<string> {
    return this.http.post<string>(`${baseUrl}/PostAdminDetails`, adminDetails);
  }

  getAdminsLst(): Observable<Admins_lst> {
    return this.http.get<Admins_lst>(`${baseUrl}/GetAdminsList`);
  }

  delDoctor(doctorId: number): Observable<string> {
    return this.http.delete(`${baseUrl}/DeleteDoctor?doctorId=${doctorId}`,{responseType: 'text'})
  }

  delAdmin(adminId: number): Observable<string> {
    return this.http.delete(`${baseUrl}/DeleteDoctor?doctorId=${adminId}`,{responseType: 'text'})
  }

}