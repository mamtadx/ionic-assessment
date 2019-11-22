import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  errorMsg: string;
  passwordType = 'password';
  showhide = "eye-off";
  defaultPwd: string = '';

  users = [{"username" : "tapan", "password" : "abc@1234"},{"username" : "shalini", "password" : "abc@1234"}]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) {
    this.validations_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required
      ]))
      ,
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))

    }
    );
    this.username = this.validations_form.controls['username'];
    this.password = this.validations_form.controls['password'];
    this.errorMsg = "";

  }

  ngOnInit() {
  }

  forgotPass() {
    this.router.navigateByUrl('forgot-password');
  }

  togglePasswordMode() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.showhide = this.showhide === 'eye' ? 'eye-off' : 'eye';
  }

  login() {
    this.errorMsg = "";
    var credentials = { "username": "", "password": "" };
    credentials.username = this.username.value.toLowerCase();
    credentials.password = this.password.value;
    for (let user of this.users ) {
      if(user.username == credentials.username && user.password == credentials.password) {
        this.router.navigateByUrl('/menu/dashboard/home-tabs/home' );
      }else{
        this.errorMsg = "Invalid Username or Password";
      }
    }
  }//method login

  validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' }
    ]
  };


}
