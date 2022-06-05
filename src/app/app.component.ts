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
  questions: IQuestion[] = []
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
  startTest = (name: string, email: string): void => {
    this.start = true;
    this.userData.name = name
    this.userData.email = email
  }
  updateResult(r: any) {
    this.result = r
  }
  endTest = (): void => {
    this.start = false
    this.finish = true;
  }


}

