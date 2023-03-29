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

  status: string;

  constructor(private adminService : AdminService) { 
    const doct1: Doctor = {
      doctor_id: 0,
      name: "Mohan Babu",
      dob: new Date('2023-09-24'),
      gender: 'M',
      doctor_start_date: new Date('2012-09-24'),
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
      doctor_start_date: new Date('2001-01-24'),
      email_id: 'RamBabu@gmai.com',
      password: '12345678',
      qualification: 'Degree',
      department_name: 'Gen-Physician',
      phone_number: '9123456799',
      clinic_address: 'Tadon Health Clinic, h block, Auto nagar, Hyderabad'
    };

    this.doctorsLst = new Array();

    this.status = "";

    this.retrieveDoctors();
  }

  ngOnInit(): void {
    
  }

  getYearsSince(target_date: Date): number {
    const now = new Date();
    const years = now.getFullYear() - target_date.getFullYear();
    const months = now.getMonth() - target_date.getMonth();
    if (months < 0 || (months === 0 && now.getDate() < target_date.getDate())) {
      return years - 1;
    }
    return years;
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

  deleteDoctor(doctorId: number): void {
    console.log("Called");
    var result = confirm("Are you sure you want to delete?");

    if(result) {
      this.adminService.delDoctor(doctorId)
      .subscribe({
        next: (data:any) => {
          this.status = data;
          console.log(this.status);
          // console.log(data);
        },
        error: (e) => console.error(e)
      });

      if(this.status==='Success') {
        console.log("Deleted");
      }
      else {
        console.log("Not Deleted");
      }
    }
  }

}
