import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { PatientDepartmentsComponent } from './components/patient-departments/patient-departments.component';


const routes: Routes = [
  { path: '', redirectTo: 'patient-dashboard', pathMatch: 'full' },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
  { path: 'patient-departments', component: PatientDepartmentsComponent },
  { path: 'patient-dashboard', component: PatientDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
