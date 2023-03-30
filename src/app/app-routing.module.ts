import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { PatientDepartmentsComponent } from './components/patient-departments/patient-departments.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ViewDoctorsComponent } from './components/view-doctors/view-doctors.component';
import { ViewAdminsComponent } from './components/view-admins/view-admins.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { UserProfilesComponent } from './components/user-profiles/user-profiles.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';


const routes: Routes = [
  { path: '', redirectTo: 'patient-dashboard', pathMatch: 'full' },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
  { path: 'patient-departments', component: PatientDepartmentsComponent },
  { path: 'patient-dashboard', component: PatientDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: 'view-doctors', component: ViewDoctorsComponent},
  { path: 'view-admins', component: ViewAdminsComponent},
  { path: 'add-admin', component: AddAdminComponent},
  { path: 'add-doctor', component: AddDoctorComponent},
  { path: 'profiles', component: UserProfilesComponent},
  { path: 'add-profile', component: AddProfileComponent},
  {path:'Doctor', component:DoctorLoginComponent},
  {path:'Patient', component:PatientLoginComponent},
  {path:'Admin', component:AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
