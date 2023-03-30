import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:8101';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

constructor(private http:HttpClient) { }
getDoctorData(username: string,password: string) {
    return this.http.get('http://localhost:8081/Doctor/'+username+'/'+password);
}

getAdminData(username: string,password: string) {
    return this.http.get('http://localhost:8081/Admin/'+username+'/'+password);
}

PatientOTP(phoneNumber:string) {
    return this.http.get(`${baseUrl}/sendOTP?phoneNumber=${phoneNumber}`);
}
PatientVerifyOTP(phoneNumber:string,otp:string) {
    return this.http.get(`${baseUrl}/verifyOTP?phoneNumber=${phoneNumber}&otp=${otp}`);
}
}

