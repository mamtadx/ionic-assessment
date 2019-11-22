import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Router, ActivatedRoute} from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('barChart', {static: true}) barChart ;
  bars: any;
  colorArray: any;
  menuitems = [
    { "name": "Create Consult", "icon": "cart", "link": "/menu/patient-search/getOpinion" },
    { "name": "Patient Registration", "icon": "cash", "link": "/menu/patient-search/newPatient" },
    { "name": "Pending Consult", "icon": "", "count": "0","link": "/menu/my-cases/opinion-pending",  "type": "opinion-pending" },
    // "icon": "assets/icon/My-cases2.svg"
    { "name": "Completed Consult", "icon": "", "count": "0","link": "/menu/my-cases/opinion-received" ,  "type": "opinion-received"},
    { "name": "Closed Consult", "icon": "", "count": "0", "link": "/menu/my-cases/closed" ,  "type":"closed" },
    { "name": "Additional Information", "icon": "", "count": "0", "link": "/menu/my-cases/additional-info",  "type":  "additional-info"},
    { "name": "General Questions", "icon": "cloud", "link": "" },
    { "name": "Profile", "icon": "clock", "link": '/menu/register-doctor/edit' },
    { "name": "Payment", "icon": "car", "link": "" },
    { "name": "Reffered Consult", "icon": "", "count": "0", "link": "/menu/my-cases/wrong-assign" ,  "type":"wrong-assign" }
  ]

  constructor(private router: Router, private dataService: DataService) {}

  ionViewDidEnter() {
    this.createBarChart();
  }
  createBarChart() {
    let ctx = this.barChart.nativeElement;
    ctx.height = 120
    this.bars = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Waves', 'Sound', 'Organic', 'InOrganic', 'Algebra', 'Trignometry', 'Energey'],
        datasets: [{
          label: 'percentiles',
          data: [90, 85, 85, 91, 75,86, 88],
          backgroundColor:  [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 235, 0.2)'
          ],
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    });
  }

 multipleQ(subject){
   this.dataService.setSubject(subject);
   this.dataService.startRecording();
   this.router.navigateByUrl('/menu/mulitple-ans-q/attempt');

 }
}
