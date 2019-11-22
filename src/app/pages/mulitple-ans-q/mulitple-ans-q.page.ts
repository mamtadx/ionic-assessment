import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-mulitple-ans-q',
  templateUrl: './mulitple-ans-q.page.html',
  styleUrls: ['./mulitple-ans-q.page.scss'],
})
export class MulitpleAnsQPage implements OnInit {
  examForm: FormGroup;
  currentQ = 0;
  answeredOption=[]
  correct = 0;
  wrong = 0;
  opType = 'attempt'
  questions = this.dataService.getQuestions();
  constructor(private formBuilder: FormBuilder, private dataService: DataService,
              private router: Router, private route: ActivatedRoute) {
    this.currentQ = 0;
    this.examForm = this.formBuilder.group({
      "answers" :new FormControl(-1)
    })
  }
  isLast = false;
  ngOnInit() {
  }
  ionViewDidEnter(){
    this.opType = this.route.snapshot.paramMap.get('type');
    console.log('ionViewDidEnter', this.opType);
    if(this.opType == 'result') {
      this.currentQ = +this.route.snapshot.paramMap.get('currentQ');
      this.answeredOption = this.dataService.getTestResults().answerList;
      console.log('answeredOption', this.answeredOption)
    }
  }
  evaluateAnswer(){
    this.answeredOption.push(this.examForm.controls['answers'].value);

    if(this.examForm.controls['answers'].value == this.questions[this.currentQ].correct){
      console.log('evaluateAnswer correct')
      this.correct ++;
    }else{
      console.log('evaluateAnswer wrong')
      this.wrong ++;
    }

  }
  next() {
    console.log(this.examForm);
    console.log('calling next...', this.examForm.controls['answers'].value);
    if(this.opType == 'attempt') {
      this.evaluateAnswer();
    }
    if (this.currentQ == this.questions.length-1) {
      this.isLast = true
    }else{
      this.currentQ ++;
      this.isLast = false
      if(this.opType == 'attempt') {
        this.examForm.controls['answers'].patchValue(-1);
      }
    }
  }
  finish() {
    console.log('calling finish...')
    this.dataService.finishRecording();
    var testResults = {"correct" : this.correct, "wrong" : this.wrong, "answerList" : this.answeredOption, "time": this.dataService.calculateTimeInterval()};
    this.dataService.setTestResults(testResults);
    this.router.navigateByUrl('/menu/test-result');
  }
  back(){
    this.router.navigateByUrl('/menu/test-result');
  }
}
