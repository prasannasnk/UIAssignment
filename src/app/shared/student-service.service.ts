import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  url=" https://jsonplaceholder.typicode.com/guide";

  constructor(private http:HttpClient) { }

  addStudentDetails(reqObj:any):Observable<any>{
    
    return this.http.post(this.url,reqObj);
  }

  getStudentDetails():Observable<any>{
    
    return this.http.get(this.url);
  }
}
