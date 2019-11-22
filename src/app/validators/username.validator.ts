// import { FormControl } from '@angular/forms';
// import { Injectable } from '@angular/core';
// import { UserLoginApi } from '../shared/sdk/services';
// import { LoopBackFilter } from '../shared/sdk/models/BaseModels';
//
// @Injectable()
// export class UsernameValidator {
//
//   debouncer: any;
//
//   constructor(public userLoginApi: UserLoginApi ){
//
//   }
//
//   checkUsername(control: FormControl): any {
//     console.log('Email control', control);
//     clearTimeout(this.debouncer);
//
//     return new Promise(resolve => {
//
//       if(!control.dirty) {
//         resolve(null);
//       }else{
//           this.debouncer = setTimeout(() => {
//             console.log('checking valid username');
//             var filter : LoopBackFilter = {}
//             filter.where = {"username" : control.value}
//             this.userLoginApi.find(filter).subscribe(
//               data => {
//                 if (data && data.length > 0) {
//                   resolve({'usernameInUse': true});
//                 }else{
//                   resolve(null);
//                 }
//               },
//               error => {
//                 console.log("error while retrieving user");
//                 resolve({'usernameInUse': true});
//               }
//             )
//
//           }, 1000);
//         }
//     });
//   }
//
// }
