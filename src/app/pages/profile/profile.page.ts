import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { UtilsService } from '../../services/utils.service';
import { DataService } from '../../services/data.service';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions,  FileTransferObject  } from "@ionic-native/file-transfer/ngx";
import {WebView} from '@ionic-native/ionic-webview/ngx';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  register_user_form: FormGroup;
  imageData;
  imagePath;
  opType="edit";
  currentUser;
  genderList;
  countryList;
  stateList;
  maritalList;

  constructor(private formBuilder: FormBuilder,private webview : WebView,
              private router: Router, private route: ActivatedRoute,private camera : Camera,
              private dataService: DataService, private utils: UtilsService
            ) {
    this.register_user_form = this.formBuilder.group({
              last_name: new FormControl('', Validators.compose([Validators.required])),
              first_name: new FormControl('', Validators.compose([Validators.required])),
              middle_name: new FormControl(''),
              mobile_1: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])),
              gender: new FormControl('', Validators.compose([Validators.required])),
              dob: new FormControl((new Date()).toISOString(), Validators.compose([Validators.required])),
              age: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(3), Validators.pattern('[0-9]*')])),
              marital_status: new FormControl('', Validators.compose([Validators.required])),
              address: new FormControl('', Validators.compose([Validators.required])),
              area: new FormControl(''),
              country_code: new FormControl('IN'),
              state_code: new FormControl('MH'),
              city: new FormControl(''),
              locality: new FormControl(''),
              pincode: new FormControl('', Validators.compose([Validators.required]))
           })
  }

  ngOnInit() {
    this.currentUser = {};
    this.initialize();
  }

  initialize() {
    this.genderList = this.dataService.getGenders();
    this.countryList = this.dataService.getCountries();
    this.stateList = this.dataService.getStates();
    this.maritalList = this.dataService.getmaritalStatuses();
    this.opType = this.route.snapshot.paramMap.get('type');
    if(this.opType == 'edit') {
      this.currentUser = this.dataService.getLogggedInUser();
      this.register_user_form.setValue({
        last_name: 	this.currentUser.last_name ,
        first_name: 	this.currentUser.first_name ,
        middle_name: 	this.currentUser.middle_name ,
        mobile_1: 	this.currentUser.mobile_1,
        gender: 	this.currentUser.gender ,
        dob: 	this.currentUser.dob ,
        age: 	this.currentUser.age ,
        marital_status: 	this.currentUser.marital_status ,
        address: 	this.currentUser.address ,
        area: 	this.currentUser.area,
        country_code: 	this.currentUser.country_code ,
        state_code: 	this.currentUser.state_code ,
        city: 	this.currentUser.city ,
        locality: 	this.currentUser.locality ,
        pincode: 	this.currentUser.pincode

      })
    }
  }

  validation_messages = {
   'last_name': [
     { type: 'required', message: 'Last Name is required.' }
   ],
   'first_name': [
     { type: 'required', message: 'First Name is required.' }
   ],
   'mobile_1': [
     { type: 'required', message: 'Contact is required.' },
     { type: 'pattern', message: 'Contact is incorrect.' }
   ],
   'gender': [
     { type: 'required', message: 'Gender is required.' }
   ],
   'marital_status': [
     { type: 'required', message: 'Marital Status is required.' }
   ],
   'dob': [
     { type: 'required', message: 'Date of Birth is required.' }
   ],
   'age': [
     { type: 'required', message: 'Age is required.' },
     { type: 'pattern', message: 'Age is incorrect.' },
     { type: 'maxlength', message: 'Age is incorrect.' }
   ],
   'address_1': [
     { type: 'required', message: 'Address is required.' }
   ],
   'pincode': [
     { type: 'required', message: 'Pincode is required.' }
   ]
 };

}
