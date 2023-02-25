import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departments_lst } from '../models/departments-lst.model';


const baseUrl = 'http://localhost:8101';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getDepartmentsLst(): Observable<Departments_lst> {
    return this.http.get<Departments_lst>(`${baseUrl}/patient/department_lst`);
  }
  
  getContainsDepartment(deptName: any): Observable<String> {
    return this.http.get<String>(`${baseUrl}/PatientDepartment?department_name=${deptName}`);
  }

}