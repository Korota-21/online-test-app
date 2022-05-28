import { Component, ElementRef, Input, VERSION, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IQuestion, Test } from './Test';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-test-app';
  start = false;
  currentQ = 0;
  questions: IQuestion[] = []
  userAnswers: number[] = new Array(10);

  currentA: any = ""
  constructor() {
  }
  ngOnInit(): void {
    this.startTest()
  }
  startTest = (): void => {
    this.start = true;
    let test = new Test();
    this.questions = test.getQuestions();
  }

  endTest = (): void => {
    this.setAnswer();
    console.log(this.userAnswers);

    this.start = false
  }
  next() {
    this.setAnswer();
    this.currentQ++
    //choose radio button
    if (!(this.userAnswers[this.currentQ] == 0))
    this.currentA = this.userAnswers[this.currentQ]

  }


  previous() {
    this.setAnswer();
    this.currentQ--
    //choose radio button
    if ((this.userAnswers[this.currentQ] > 0)) {
      this.currentA = this.userAnswers[this.currentQ]
    }
  }
  setAnswer() {
    this.userAnswers[this.currentQ] = this.currentA;
    this.currentA = 0

  }
}

