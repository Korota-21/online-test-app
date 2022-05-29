import { Component } from '@angular/core';
import { IQuestion } from "./interfaces/IQuestion";
import { IUserData } from './interfaces/IUserData';
import { TestService } from './services/test.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-test-app';
  start = false;
  finish = false;
  currentQ = 0;
  currentA: any = ""
  questions: IQuestion[] = []
  userAnswers: number[] = [];
  result: number = 0
  userData: IUserData = {
    name: "",
    email: ""
  }
  constructor(private _testService: TestService) {
  }
  ngOnInit(): void {
    this.questions = this._testService.getQuestions();
  }
  Getresult() {
    let result = 0;
    for (let i = 0; i < this.questions.length; i++)
      if (this.questions[i].rAnswer == this.userAnswers[i])
        result++
    this.result = result;
  }
  startTest = (name: string, email: string): void => {
    this.start = true;

    this.userAnswers = new Array(this.questions.length);
    this.userData.name = name
    this.userData.email = email
  }

  endTest = (skip: boolean = false): void => {
    this.setAnswer();
    //check if answers have been choosed
    if (!skip) {
      let allAnswerd: boolean = this.userAnswers.every((ans) => ans > 0)
      if (!allAnswerd)
        if (!confirm("Are you sure?\nThere are some questions has not be answered."))
          return;
    }
    this.Getresult()
    this.start = false
    this.finish = true;
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

