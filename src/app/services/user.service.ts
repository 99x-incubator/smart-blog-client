import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  signupUser(body:any){
    return this._http.post('http://localhost:3000/users/signup', body,{
      observe:'body'
    });
  }

}
