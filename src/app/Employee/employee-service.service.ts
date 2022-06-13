import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  url='https://retoolapi.dev/GFHqAV/getemployees'
  url2='https://retoolapi.dev/H2F0Ui/getemployedetail'


  constructor(private http:HttpClient) { }
 getEmployee(): Observable<any>{
   return this.http.get(this.url)
 }
 getEmployeebyId(id:any){
  return this.http.get(`${this.url2}/${id}`);

 }

}
