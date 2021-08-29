import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentFormComponent} from './student-form/student-form.component';
import {ViewDetailsComponent} from './view-details/view-details.component';

const routes: Routes = [
  { path: 'studentForm', component:  StudentFormComponent},
  { path: 'viewDetails', component: ViewDetailsComponent },
  { path: '', redirectTo: '/studentForm', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
