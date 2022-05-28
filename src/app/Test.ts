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
      question: "something to be asked?",
      answer1: "answer 1",
      answer2: "currect",
      answer3: "3",
      answer4: "4",
      rAnswer:2
    },
    {
      question: "something",
      answer1: "1",
      answer2: "2",
      answer3: "currect",
      answer4: "4",
      rAnswer:3

    },
    {
      question: "something",
      answer1: "1",
      answer2: "currect",
      answer3: "3",
      answer4: "4",
      rAnswer:2

    },
    {
      question: "something",
      answer1: "1",
      answer2: "2",
      answer3: "currect",
      answer4: "4",
      rAnswer:3

    },
    {
      question: "something",
      answer1: "1",
      answer2: "2",
      answer3: "3",
      answer4: "currect",
      rAnswer:4
    },
    {
      question: "something",
      answer1: "currect",
      answer2: "2",
      answer3: "3",
      answer4: "4",
      rAnswer:1
    },
    {
      question: "something",
      answer1: "1",
      answer2: "2",
      answer3: "currect",
      answer4: "4",
      rAnswer:3
    },
    {
      question: "something",
      answer1: "1",
      answer2: "2",
      answer3: "currect",
      answer4: "4",
      rAnswer:3
    },
    {
      question: "something",
      answer1: "1",
      answer2: "2",
      answer3: "currect",
      answer4: "4",
      rAnswer:3
    },
    {
      question: "something",
      answer1: "currect",
      answer2: "2",
      answer3: "3",
      answer4: "4",
      rAnswer:1
    },
    ];
    this.questions.push(...elements);
    return this.questions;
  }

}
