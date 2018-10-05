import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api;
  constructor(private _http: HttpClient) {
    this.api = 'http://localhost:3000/';
  }

  signupUser(body: any) {
    return this._http.post(this.api + 'users/signup', body, {
      observe: 'body'
    });
  }

  loginUser(body) {
    return this._http.post(this.api + 'users/login', body, {
      observe: 'body'
    });
  }
}
