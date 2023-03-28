import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Doctor } from 'src/app/models/doctor.models';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.sass']
})
export class AddDoctorComponent implements OnInit {
  name: string;
  ph_no: string;
  dob: Date;
  gender: string;
  clinic_address: string;
  qualification: string;
  doctor_start_date: Date;
  dept_name: string;
  email_id: string;
  password: string;

  status: string;

  constructor(private adminService : AdminService) { 
    this.name = "";
    this.ph_no = "";
    this.dob = new Date('0000-00-00');
    this.gender = "";
    this.clinic_address = "";
    this.qualification = "";
    this.doctor_start_date = new Date('0000-00-00');
    this.dept_name = "";
    this.email_id = "";
    this.password = "";
    this.status = "";
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("Form submitted!");
    console.log("Name: " + this.name);
    console.log("Phone: " + this.ph_no);
    console.log("DOB: " + this.dob);
    console.log("Gender: " + this.gender);
    console.log("Address: " + this.clinic_address);
    console.log("Qualification: " + this.qualification);
    console.log("Doctor Start date: " + this.doctor_start_date)
    console.log("Department: " + this.dept_name);
    console.log("Email: " + this.email_id);
    console.log("Password: " + this.password);

    const doct: Doctor = {
      name: this.name,
      dob: this.dob,
      gender: this.gender,
      doctor_start_date: this.doctor_start_date,
      email_id: this.email_id,
      password: this.password,
      qualification: this.qualification,
      department_name: this.dept_name,
      phone_number: this.ph_no,
      clinic_address: this.clinic_address
    };

    this.adminService.postDoctorDetails(doct)
    .subscribe({
      next: (data:any) => {
        this.status = data;
        console.log(this.status);
        // console.log(data);
      },
      error: (e) => console.error(e)
    });
  }


}
