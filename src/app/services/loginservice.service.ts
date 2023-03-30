import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8101';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

constructor(private http:HttpClient) { }
getDoctorData(username: string,password: string) {
    return this.http.get(`${baseUrl}/Doctor/`+username+'/'+password);
}

getAdminData(username: string,password: string) {
    return this.http.get(`${baseUrl}/Admin/`+username+'/'+password);
}

PatientOTP(phoneNumber:string) {
    console.log(phoneNumber);
    return this.http.get(`${baseUrl}/Patient/sendOTP?phoneNumber=${phoneNumber}`);
}
PatientVerifyOTP(phoneNumber:string,otp:string) {
    return this.http.get(`${baseUrl}/Patient/verifyOTP?phoneNumber=${phoneNumber}&otp=${otp}`);
}
}

