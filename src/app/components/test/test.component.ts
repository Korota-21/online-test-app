import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IQuestion } from 'src/app/interfaces/IQuestion';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() questions: IQuestion[] = [];
  @Input() ParentEndTest!: () => void;
  @Output() childResultEvent = new EventEmitter();
  currentQ = 0;
  currentA: any = ""
  userAnswers: number[] = [];

  constructor() { }

  ngOnInit(): void {

  }
  next() {
    this.setAnswer();
    this.currentQ++// change question
    //choose radio button if answer is exist
    if (!(this.userAnswers[this.currentQ] == 0))
      this.currentA = this.userAnswers[this.currentQ]

  }
  previous() {
    this.setAnswer();
    this.currentQ-- // change question
    //choose radio button if answer is exist
    if ((this.userAnswers[this.currentQ] > 0)) {
      this.currentA = this.userAnswers[this.currentQ]
    }
  }
  setAnswer() {
    this.userAnswers[this.currentQ] = this.currentA;
    this.currentA = 0
  }
  setResult() {
    let result = 0;
    for (let i = 0; i < this.questions.length; i++)
      if (this.questions[i].rAnswer == this.userAnswers[i])
        result++

    this.childResultEvent.emit(result)//pass it to parent
  }


  endTest = (): void => {
    this.setAnswer();
    //check if answers have been choosed
      let allAnswerd: boolean = this.userAnswers.every((ans) => ans > 0)
      if (!allAnswerd)
        if (!confirm("Are you sure?\nThere are some questions has not be answered."))
          return;

    this.setResult()

    this.ParentEndTest();

  }
}
