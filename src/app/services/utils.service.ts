import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerButton } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private pickerCtrl: PickerController) { }

  getAgeFromDOB (dob) {
    console.log("dob =>", dob ,dob.substr(6, 2));

    var year = Number(dob.substr(0, 4));
    var month = Number(dob.substr(5, 2)) - 1;
    var day = Number(dob.substr(8, 2));

    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--;
    }
    return age;

}

getDOBFromAge (age) {
  console.log("age =>", age);
  var today = new Date();
  var year = today.getFullYear() - Number(age);
  var month = today.getMonth();
  var day = today.getDate();

  var dateStr = year +"-"
  return (new Date(year,month, day)).toISOString();

}

async presentToastMessage(message){
      const toast = await this.toastController.create({
        message: message,
        duration: 2000,
        position : "bottom",
        color: 'rr-light',
        cssClass: 'custom-toast-css',

      });
      toast.present();
 }

 async showMessageWithRemark(title, subtitle) {
   let choice
   const alert = await this.alertController.create({
     header: title,
     subHeader: subtitle,
     message: '',
     inputs: [
       {
         name: 'remarkInput',
         id: 'remarkIn',
         placeholder: 'Write remark..',
       },
     ],

     buttons: [{
       text: 'Ok',
       handler: data => {
         if (data.remarkInput == "") {
           alert.setAttribute("message", "Remark is required");
           return false;
         } else {
           console.log(data.remarkInput);
           alert.dismiss(data);
           return false;
         }
       }
     }, {
       text: 'Cancel',
       handler: () => {
         alert.dismiss(false);
         return false;
       }
     }]
   });

   await alert.present();
   await alert.onDidDismiss().then((data) => {
     choice = data
   })
   return choice
 }


 async showMessageOkCancel(title, message) {
   let choice
   const alert = await this.alertController.create({
     header: title,
     message: message,

     buttons: [{
       text: 'Ok',
       handler: () => {
         alert.dismiss(true);
         return false;
       }
     }, {
       text: 'Cancel',
       handler: () => {
         alert.dismiss(false);
         return false;
       }
     }]
   });

   await alert.present();
   await alert.onDidDismiss().then((data) => {
     choice = data
   })
   return choice
 }


 async showMessageOk(title, message) {
   const alert = await this.alertController.create({
     header: title,
     message: message,

     buttons: [{
       text: 'Ok',
       handler: () => {
         alert.dismiss(true);
         return false;
       }
     }]
   });

   await alert.present();
   await alert.onDidDismiss().then((data) => {})
   
 }

 async showDurationPicker() {
     let opts: PickerOptions = {
       cssClass: 'duration-picker',
       // title: 'Select Followup' ,
       buttons: [
         {
           text: 'Cancel',
           role: 'cancel',
           handler: (value:any) => {
             picker.dismiss(false);
             return false;
           }
         },
         {
           text: 'OK',
           cssClass: 'special-done',
           handler: (value:any) => {
             picker.dismiss(true);
             return false;
           }
         }
       ],
       columns: [
         {
           name: 'count',
           options: [
                { text: '1', value: '1' },{ text: '2', value: '2' },{ text: '3', value: '3' },{ text: '4', value: '4' },
 			          { text: '5', value: '5' },{ text: '6', value: '6' },{ text: '7', value: '7' },{ text: '8', value: '8' },
 			          { text: '9', value: '9' },{ text: '10', value: '10' },{ text: '11', value: '11' },{ text: '12', value: '12' },
                { text: '13', value: '13' },{ text: '14', value: '14' },{ text: '15', value: '15' },{ text: '16', value: '16' },
 			          { text: '17', value: '17' },{ text: '18', value: '18' },{ text: '19', value: '19' },{ text: '20', value: '20' },
                { text: '21', value: '21' },{ text: '22', value: '22' },{ text: '23', value: '23' },{ text: '24', value: '24' },
 			          { text: '25', value: '25' },{ text: '26', value: '26' },{ text: '27', value: '27' },{ text: '28', value: '28' },
 			          { text: '29', value: '29' },{ text: '30', value: '30' },{ text: '31', value: '31' }
           ]
         },
         {
           name: 'duration',
           options: [
              { text: 'Days', value: 'Days' },
              { text: 'Weeks', value: 'Weeks' },
 			        { text: 'Months', value: 'Months' },
              { text: 'Years', value: 'Years' }
            ]
         }
       ]
     };
     let selected = null;
     const picker = await this.pickerCtrl.create(opts);
     await picker.present();
     await picker.onDidDismiss().then(async res => {
       if(res.data){
           let count = await picker.getColumn('count');
           let duration = await picker.getColumn('duration');
          selected = [
             count.options[count.selectedIndex].text,
             duration.options[duration.selectedIndex].text

           ];
         }
     });
      return selected;
   }

   async showDurationPickerSmall() {
       let opts: PickerOptions = {
         cssClass: 'duration-picker',
         // title: 'Select Followup' ,
         buttons: [
           {
             text: 'Cancel',
             role: 'cancel',
             handler: (value:any) => {
               picker.dismiss(false);
               return false;
             }
           },
           {
             text: 'OK',
             cssClass: 'special-done',
             handler: (value:any) => {
               picker.dismiss(true);
               return false;
             }
           }
         ],
         columns: [
           {
             name: 'duration',
             options: [
                { text: '3 Days', value: '3 Days' },
                { text: '1 Week', value: '1 Week' },
                { text: '3 Weeks', value: '3 Weeks' },
   			        { text: '1 Month', value: '1 Month' }
              ]
           }
         ]
       };
       let selected = null;
       const picker = await this.pickerCtrl.create(opts);
       await picker.present();
       await picker.onDidDismiss().then(async res => {
         if(res.data){
             let duration = await picker.getColumn('duration');
             selected = [
               duration.options[duration.selectedIndex].text
             ];
           }
       });
        return selected;
     }

}
