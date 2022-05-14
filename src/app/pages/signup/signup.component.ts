import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor() { }

  signupform : FormGroup = new FormGroup({
    'name' : new FormControl('' , Validators.required),
    'cin' : new FormControl('' , [Validators.required , Validators.min(1000000) , Validators.max(99999999)] ),
    'email' : new FormControl('' , [Validators.required , Validators.email]),
    'password' : new FormControl('' , Validators.required),
    "confirm_password" : new FormControl('' , Validators.required)

  })
  ngOnInit(): void {
  }

}
