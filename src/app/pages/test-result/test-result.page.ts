import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.page.html',
  styleUrls: ['./test-result.page.scss'],
})
export class TestResultPage implements OnInit {
  testResults;
  questions;
  constructor(private dataService: DataService , private router: Router) {
    this.initialize();
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
      this.initialize();
  }

  initialize(){
    this.testResults = this.dataService.getTestResults();
    this.questions = this.dataService.getQuestions();
    // this.testResults =  {"correct" : 1, "wrong" : 2, "answerList" : '', "time": 10};
    console.log("testResults", this.testResults);
  }

  gotoQ(qno){
    this.router.navigateByUrl('/menu/mulitple-ans-q/result/'+qno);
  }
}
