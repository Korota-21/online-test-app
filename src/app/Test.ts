export interface IQuestion {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  rAnswer:number;
}

export class Test {
  questions: IQuestion[] = [];
  constructor() {
  }
  getQuestions() {
    let elements = [{
      question: "a front-end framework",
      answer1: "node js",
      answer2: "Angular",
      answer3: "Laravel",
      answer4: "Flask",
      rAnswer:2
    },{
      question: "something",
      answer1: "1",
      answer2: "2",
      answer3: "currect",
      answer4: "4",
      rAnswer:3

    },


    ];
    this.questions.push(...elements);
    return this.questions;
  }

}
