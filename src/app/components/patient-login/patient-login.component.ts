import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.sass']
})
export class PatientLoginComponent implements OnInit {

  phone_number:any;
  otp:any;
  
  constructor(private loginservice:LoginserviceService,private router : Router) {
   
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  sendOTP() {
    // TODO: Send a request to a back-end service to generate and send OTP to the user's phone number.
    this.loginservice.PatientOTP(this.phone_number)
      .subscribe((response:  any) => {
        // Verify OTP entered by user
        if (response === "pending") {
          // Authenticate user and log them in
          alert('OTP sent successfully.');
        } 
        else {
          alert('OTP sending failed!');
        }
      });
  }

  verifyOTP() {
    // TODO: Send a request to a back-end service to verify the OTP.
    // If the OTP is valid, log the user in.
    this.loginservice.PatientVerifyOTP(this.phone_number,this.otp)
      .subscribe((response:  any) => {
        // Verify OTP entered by user
        if (response === "approved") {
          // Authenticate user and log them in
          alert(' Authentication successful!');
        } else {
          alert('OTP incorrect');
        }
      });
  }
}

