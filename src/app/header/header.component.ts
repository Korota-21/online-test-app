import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() start=false;
  @Input() endFun!: () => void;//to pass down to the timer
  constructor() { }

  ngOnInit(): void {
  }
}
