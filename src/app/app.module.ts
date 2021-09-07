import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import {StudentServiceService} from './shared/student-service.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    ViewDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
