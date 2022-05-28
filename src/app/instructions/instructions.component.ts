import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  @Input() startfun!: (name: string, email: string) => void;
  @Input() questionNum!:number;
  constructor() { }

  ngOnInit(): void {
  }

}


