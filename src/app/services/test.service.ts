import { Injectable } from '@angular/core';
import { IQuestion } from '../interfaces/IQuestion';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private _questions: IQuestion[] = [{
    question: "a front-end framework",
    answer1: "node js",
    answer2: "Angular",
    answer3: "Laravel",
    answer4: "Flask",
    rAnswer: 2
  },
  {
    question: "what is git?",
    answer1: "a framework",
    answer2: "a programming language",
    answer3: "is a DevOps tool used for source code management.",
    answer4: "is a package manager for JavaScript",
    rAnswer: 3

  },
  {
    question: "what is npm?",
    answer1: "programming language",
    answer2: "is a package manager for JavaScript",
    answer3: "is a package manager for Laravel",
    answer4: "is a DevOps tool used for source code management.",
    rAnswer: 2

  },


  ];

  constructor() { }
  getQuestions() {
    return this._questions;
  }
}
