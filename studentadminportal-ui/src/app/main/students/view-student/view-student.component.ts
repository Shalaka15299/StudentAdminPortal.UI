import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender } from 'src/app/models/ui-models/gender.model';
import { Student } from 'src/app/models/ui-models/student.model';
import { GenderService } from 'src/app/service/gender.service';
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
    address:{
      id:'',
      physicalAddress:'',
      postalAddress:''
    }
  }
  
  genderList: Gender[] = [];
  
  constructor(private readonly studentService:StudentService,
      private readonly route:ActivatedRoute,
      private readonly genderService:GenderService,
      private snackbar:MatSnackBar,
      private router:Router
      ){}

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
              // console.log(sucessMessage);
              this.student = sucessMessage;
            }
          );
              this.genderService.getGenderList()
              .subscribe(
                (successMessage)=>{
                    this.genderList =  successMessage;
                    // console.log(this.genderList);
                }
              );
        }

      }
    )
    
  }

  onUpdate(): void {
    this.studentService.updateStudent(this.student.id,this.student)
    .subscribe(
      (successMessage)=>{
          this.snackbar.open('Student Updated Successfully..',undefined,{
            duration:2000
          });
          
      },
      (errorMessage)=>{
        console.log(errorMessage);
        
      }
    )
    console.log(this.student);
  }

  onDelete():void{
    this.studentService.deleteStudent(this.student.id)
    .subscribe(
      (successMessage)=>{
        this.snackbar.open('Student deleted Successfully',undefined,{
          duration:2000
        });
        
        setTimeout(()=>{
          this.router.navigateByUrl('students');
        },2000);

        console.log(successMessage);
      },
      (errorMessage)=>{
        console.log(errorMessage);
      }

    )
  }

}
