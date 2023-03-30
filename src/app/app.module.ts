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
import { ViewAdminsComponent } from './components/view-admins/view-admins.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { UserProfilesComponent } from './components/user-profiles/user-profiles.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorDashboardComponent,
    PatientDepartmentsComponent,
    PatientDashboardComponent,
    AdminDashboardComponent,
    ViewDoctorsComponent,
    ViewAdminsComponent,
    AddAdminComponent,
    AddDoctorComponent,
    UserProfilesComponent,
    AddProfileComponent,
    AdminLoginComponent,
    DoctorLoginComponent,
    PatientLoginComponent
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
