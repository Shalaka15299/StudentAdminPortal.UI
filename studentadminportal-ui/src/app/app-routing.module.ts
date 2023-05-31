import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './main/students/students.component';
import { ViewStudentComponent } from './main/students/view-student/view-student.component';

const routes: Routes = [
  {path:'',component:StudentsComponent, pathMatch:'full'},
  {path:'students',component:StudentsComponent},
  {path:'students/:id',component:ViewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
