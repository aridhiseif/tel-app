import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() navBarState = new EventEmitter<Boolean>();
  bool: boolean = false;
  navbarbtn() {
    this.navBarState.emit(!this.bool);
    this.bool = !this.bool;
    console.log(`navBarState = ${this.bool} `);
  }

  constructor() {}

  ngOnInit(): void {}
}
