import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { UpdateStudentRequest } from '../models/ui-models/update-student-request.model';
import { AddStudentRequest } from '../models/ui-models/add-student-request.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "https://localhost:44388";
  constructor(private http:HttpClient) { }

  getStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl + '/Students');
  }

  getOneStudent(studentId:string):Observable<Student>{
    return this.http.get<Student>(this.baseUrl + '/Students/'+ studentId)
  }

  updateStudent(studentId:string, studentRequest: Student):Observable<Student>{
    const updateStudentRequest : UpdateStudentRequest = {
      firstName: studentRequest.firstName,
      lastName: studentRequest.lastName,
      datOfBirth:studentRequest.datOfBirth,
      email:studentRequest.email,
      mobile:studentRequest.mobile,
      genderId:studentRequest.genderId,
      physicalAddress:studentRequest.address.physicalAddress,
      postalAddress:studentRequest.address.postalAddress
    }
    return this.http.put<Student>(this.baseUrl + '/students/' + studentId,updateStudentRequest);
  }

  deleteStudent(studentId:string):Observable<Student>{
    return this.http.delete<Student>(this.baseUrl + '/students/' +studentId);
  }

  addStudent(studentRequest:Student):Observable<Student>{
    const addStudentRequest : AddStudentRequest = {
      firstName: studentRequest.firstName,
      lastName: studentRequest.lastName,
      datOfBirth:studentRequest.datOfBirth,
      email:studentRequest.email,
      mobile:studentRequest.mobile,
      genderId:studentRequest.genderId,
      physicalAddress:studentRequest.address.physicalAddress,
      postalAddress:studentRequest.address.postalAddress
    };
    return this.http.post<Student>(this.baseUrl + "/students/addstudent",addStudentRequest);
  }
}
