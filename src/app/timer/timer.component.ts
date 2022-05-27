import { Component, OnDestroy, OnInit } from '@angular/core';
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  countDown!: Subscription;
  teststart = false;
  counter = 600;
  tick = 1000;
  constructor() {

  }

  ngOnInit(): void {
    this.countDown = timer(0, this.tick).subscribe(() => this.counterF());

  }
  counterF() {
    --this.counter
    console.log(this.counter);

  }
  ngOnDestroy() {
    this.countDown != null;
  }
}
@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
