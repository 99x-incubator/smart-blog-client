import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor() {

    this.signUpForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      cnfpass: new FormControl(null, this.passValidator)
    });
  }

  ngOnInit() {
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }

  isValid(controlName) {
    return this.signUpForm.get(controlName).invalid && this.signUpForm.get(controlName).touched;
  }

  signup() {
    console.log(this.signUpForm.value);

    // if (this.signUpForm.valid) {
    //   this.signUpForm.submitRegister(this.signUpForm.value)
    //     .subscribe(
    //       data => this.successMessage = 'Registration Success',
    //       error => this.successMessage = 'SOme error'
    //     );
    // }

  }



}
