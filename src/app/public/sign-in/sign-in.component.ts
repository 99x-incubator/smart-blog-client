import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @ViewChild('userEmail') userEmailInput: ElementRef;
  @ViewChild('userPassword') userPasswordInput: ElementRef;

  constructor() { }

  ngOnInit() {
    
  }

  public checkingCredentials(userEmail , userPassword) : void {
    console.log(userEmail.value);
    console.log(userPassword.value);
  }

}
