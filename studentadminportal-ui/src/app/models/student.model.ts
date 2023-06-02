import { Address } from "./address.model";
import { Gender } from "./gender.model";

export interface Student{
    id: string,
    firstName: string,
    lastName:string,
    datOfBirth:string,
    email:string,
    mobile:string,
    profileImageUrl:string,
    genderId:string,
    gender:Gender,
    address:Address      
}