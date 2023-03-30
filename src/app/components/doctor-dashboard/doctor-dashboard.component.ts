import { Component, OnInit } from '@angular/core';
import { AvailabilityCheck } from 'src/app/models/availability-check.model';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.sass']
})
export class DoctorDashboardComponent implements OnInit {
  available: boolean;

  constructor(private doctorService: DoctorService) { 
    this.available = true;
    this.toggleChange();
  }

  ngOnInit(): void {
  }

  toggleChange() {
    if(this.available==true){
      this.available=false;
    }
    else if(this.available==false){
      this.available=true;
    }
    console.log(this.available);

    let aval = new AvailabilityCheck();
    aval.doctorId = 1;
    aval.status = this.available;
    console.log(aval);

    this.doctorService.putDoctorStatus(aval)
    .subscribe({
      next: (data:String) => {
        console.log(data);
        if(data==="Success"){
          alert("Status changed successfully.");
        }
        // console.log(this.in_count_map);
      },
      error: (e) => console.error(e)
    });
  }

  w3_close() {
    var box = document.getElementsByClassName("w3-sidenav") as unknown as HTMLCollectionOf<HTMLElement>;
    box[0].style.display="None"
   
  }
  w3_open() {
    var box = document.getElementsByClassName("w3-sidenav") as unknown as HTMLCollectionOf<HTMLElement>;
    box[0].style.display="block"
  }

}
