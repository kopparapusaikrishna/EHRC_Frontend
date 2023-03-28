import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { PatientDepartmentsComponent } from './components/patient-departments/patient-departments.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ViewDoctorsComponent } from './components/view-doctors/view-doctors.component';
import { ViewAdminsComponent } from './components/view-admins/view-admins.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';


const routes: Routes = [
  { path: '', redirectTo: 'patient-dashboard', pathMatch: 'full' },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
  { path: 'patient-departments', component: PatientDepartmentsComponent },
  { path: 'patient-dashboard', component: PatientDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: 'view-doctors', component: ViewDoctorsComponent},
  { path: 'view-admins', component: ViewAdminsComponent},
  {path: 'add-admin', component: AddAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
