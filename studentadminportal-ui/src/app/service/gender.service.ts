import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../models/gender.model';


@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private baseUrl = "https://localhost:44388";

  constructor(private http:HttpClient) { }

  // getGenderList():Observable<Gender[]>{
  //   return this.http.get<Gender[]>(this.baseUrl + '/gender');
  // }

  getGenderList():Observable<Gender[]>{
    return this.http.get<Gender[]>(this.baseUrl + '/gender');
  }
}
