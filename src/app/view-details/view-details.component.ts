import { Component, OnInit } from '@angular/core';
import {StudentServiceService} from '../shared/student-service.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  studentDetails : any[]= [];
  constructor(private studentService:StudentServiceService) { }

  ngOnInit(): void {
  }
  handleEvents(){

    this.studentService.getStudentDetails().subscribe(resp => {
      this.studentDetails = resp;
    })
  }
}
