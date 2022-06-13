import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url="https://retoolapi.dev/B13laa/getusers";

  constructor(private _http: HttpClient,) { }
 
  getusers():Observable<any>{
    return this._http.get(this.url);
  }
 

}
