import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { PatientDepartmentsComponent } from './components/patient-departments/patient-departments.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ViewDoctorsComponent } from './components/view-doctors/view-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorDashboardComponent,
    PatientDepartmentsComponent,
    PatientDashboardComponent,
    AdminDashboardComponent,
    ViewDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
