import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public baseUrl = "https://localhost:44388";
  constructor(private http:HttpClient) { }

  getStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl + '/Students');
  }

  getOneStudent(studentId:string):Observable<Student>{
    return this.http.get<Student>(this.baseUrl + '/Students/'+ studentId)
  }

}
