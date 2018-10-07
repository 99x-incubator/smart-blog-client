import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  // @ViewChild('userEmail') userEmailInput: ElementRef;
  // @ViewChild('userPassword') userPasswordInput: ElementRef;
  signInForm: FormGroup;
  _userservice: UserService;
  private successMessage = '';

  constructor() {
    this.signInForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required)
    });
  }



  ngOnInit() {
  }


  submit() {
    console.log(this.signInForm.value);

    if (this.signInForm.valid) {
      this._userservice.signupUser(this.signInForm.value)
        .subscribe(
          data => console.log(data),
          error => this.successMessage = 'SOme error'
        );

    }

  }

}
