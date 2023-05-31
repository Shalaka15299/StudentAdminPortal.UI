import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/ui-models/student.model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  studentId:string | null | undefined;
  student: Student = {
    id:'', 
    firstName:'',
    lastName:'',
    datOfBirth:'',
    email:'',
    mobile:'',
    genderId:'',
    profileImageUrl:'',
    gender:{
      id:'',
      description:''
    },
    Address:{
      id:'',
      physicalAddress:'',
      postalAddress:''
    }
  }

  constructor(private readonly studentService:StudentService,
      private readonly route:ActivatedRoute){}

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      (params)=>{
        this.studentId = params.get('id');

        if(this.studentId){
          // console.log(this.studentId);
          this.studentService.getOneStudent(this.studentId)
          .subscribe(
            (sucessMessage)=>{
              // alert('getOneStudent called');
              console.log(sucessMessage);
              this.student = sucessMessage;
            }
          );
        }

      }
    )
    
  }

}
