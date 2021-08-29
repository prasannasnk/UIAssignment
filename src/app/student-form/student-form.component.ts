import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';




@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  
  addDetails = new FormGroup({});
  constructor(private formBuilder: FormBuilder) { }

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
    //console.log(this.signupForm.get(‘user_name’).value);
    }
}
