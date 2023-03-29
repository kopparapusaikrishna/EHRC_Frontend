import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.models';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.sass']
})
export class ViewDoctorsComponent implements OnInit {
  doctorsLst: Array<Doctor>;

  constructor(private adminService : AdminService) { 
    const doct1: Doctor = {
      doctor_id: 0,
      name: "Mohan Babu",
      dob: new Date('2023-09-24'),
      gender: 'M',
      doctor_start_date: new Date('0000-00-00'),
      email_id: 'MohanBabu@gmai.com',
      password: '123456',
      qualification: 'MBBS',
      department_name: 'Dermatologist',
      phone_number: '9848440825',
      clinic_address: 'Tadon Health Clinic, k block, Gandhi nagar, Tirupathi'
    };
    const doct2: Doctor = {
      doctor_id: 0,
      name: "Ram Babu",
      dob: new Date('2023-09-4'),
      gender: 'M',
      doctor_start_date: new Date('0000-00-00'),
      email_id: 'RamBabu@gmai.com',
      password: '12345678',
      qualification: 'Degree',
      department_name: 'Gen-Physician',
      phone_number: '9123456799',
      clinic_address: 'Tadon Health Clinic, h block, Auto nagar, Hyderabad'
    };
    this.doctorsLst = new Array();

    this.retrieveDoctors();
  }

  ngOnInit(): void {
    
  }

  retrieveDoctors(): void {
    this.adminService.getDoctorsLst()
      .subscribe({
        next: (data:any) => {
          this.doctorsLst = data;
          console.log(this.doctorsLst);
          // console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
