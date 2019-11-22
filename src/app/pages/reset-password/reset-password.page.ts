import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { PasswordValidator } from '../../validators/password.validator';
import { Router, RouterModule } from '@angular/router';
import { AbstractControl, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  validations_form: FormGroup;
  oldPassword: AbstractControl;
  newPassword: AbstractControl;
  confirmPassword: AbstractControl;
  matching_passwords_group: FormGroup;
  errorMsg: string;
  passwordTypes = ["password", "password", "password" ]
  showhides = ["eye-off", "eye-off", "eye-off" ]

  imagePath;
  loginUser;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private utilsService: UtilsService) {

      this.matching_passwords_group = new FormGroup({
        newPassword: new FormControl('', Validators.compose([
                  Validators.minLength(8),
                  Validators.required,
                  // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
                  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
        ])),
        confirmPassword: new FormControl('', Validators.required)
      },
       (validations_form: FormGroup) => {
            return PasswordValidator.areEqual(validations_form);
       });
    this.validations_form = this.formBuilder.group({
      oldPassword: new FormControl('', Validators.compose([
        Validators.required
      ])),
      matching_passwords: this.matching_passwords_group

    });
    this.oldPassword = this.validations_form.controls['oldPassword'];
    this.newPassword = this.validations_form.controls['matching_passwords'].get('newPassword');
    this.confirmPassword = this.validations_form.controls['matching_passwords'].get('confirmPassword');    
    this.errorMsg = "";
  }

  initialize() {
    // this.oldPassword.setValue('');
    // this.newPassword.setValue('');
    // this.confirmPassword.setValue('');
    this.validations_form.reset();
    this.errorMsg = '';
  }
  ionViewWillEnter() {
    this.initialize();
  }
  togglePasswordMode(index) {
   this.passwordTypes[index] = this.passwordTypes[index] === 'text' ? 'password' : 'text';
   this.showhides[index] = this.showhides[index] === 'eye' ? 'eye-off' : 'eye';
 }

 resetPassword() {
   this.utilsService.presentToastMessage("Password is Successfully Changed.");
   this.router.navigateByUrl('/login');
 }
  ngOnInit() {
  }


  validation_messages = {
     'oldPassword': [
       { type: 'required', message: 'Old Password is required.' }
     ],
     'newPassword': [
       { type: 'required', message: 'New Password is required.' },
       { type: 'minlength', message: 'New Password must be at least 8 characters long.' },
       { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, one special character and one number.' }
     ]
     ,
     'confirmPassword': [
       { type: 'required', message: 'Confirm Password is required.' }
     ],
     'matching_passwords': [
      { type: 'areEqual', message: 'Password mismatch.' }
    ],
   };

}
