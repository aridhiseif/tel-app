import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  navstate: boolean = false;
  constructor() {}

  changeState() {
    this.navstate = !this.navstate;
    console.log(`nav state = ${this.navstate}`);
  }

  ngOnInit(): void {}
}
