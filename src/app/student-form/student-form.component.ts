import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import {StudentServiceService} from '../shared/student-service.service';
import {Subscription} from 'rxjs';




@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  
  addDetails = new FormGroup({});
  successMessage: string ='';

  constructor(private formBuilder: FormBuilder,private studentService:StudentServiceService) { }

  ngOnInit(): void {
  

  

  this.addDetails = this.formBuilder.group({
    studentName: ['', [Validators.required, Validators.minLength(10)]],
    emailId: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', [Validators.required]],
    website: ['', [Validators.required]],
  });
  }

  get addDetailsControls(): any {
    return this.addDetails['controls'];
 }

  onSubmit() {
    console.log(this.addDetails);
    this.studentService.addStudentDetails(this.addDetails).subscribe(resp =>{
      this.successMessage =resp;
    })
    }
}
