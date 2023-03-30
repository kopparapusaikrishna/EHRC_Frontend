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

  model={phone_number:"",otp:""};
  
  constructor(private loginservice:LoginserviceService,private router : Router) {
  
  }
  ngOnInit(): void {
    
  }

  sendOTP() {
    // TODO: Send a request to a back-end service to generate and send OTP to the user's phone number.
    this.loginservice.PatientOTP(this.model.phone_number)
    .subscribe({
      next: (response:any) => {
        // Verify OTP entered by user
        if (response == 1) {
          // Authenticate user and log them in
          alert('OTP sent successfully.');
        } 
        else {
          alert('OTP sending failed!');
        }
      },
    });
  }

  verifyOTP() {
    // TODO: Send a request to a back-end service to verify the OTP.
    // If the OTP is valid, log the user in.
    this.loginservice.PatientVerifyOTP(this.model.phone_number,this.model.otp)
      .subscribe((response:  any) => {
        // Verify OTP entered by user
        if (response == 1) {
          // Authenticate user and log them in
          alert(' Authentication successful!');
          this.router.navigate(["/profiles"]);
        } else {
          alert('OTP incorrect');
        }
      });
  }
}

