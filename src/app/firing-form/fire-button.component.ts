import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fire-button',
  templateUrl: './fire-button.component.html',
  styleUrls: ['./fire-button.component.css']
})
export class FireButtonComponent implements OnInit {
  countdown = 0;
  isReady = false;
  private startTime = 0;

  constructor() { }

  ngOnInit() {
  }

  ready() {
    this.startTime = Date.now();

    let updateTimer = () => {
      this.countdown = 10 - (Date.now() - this.startTime)/1000;
      if (this.countdown < 5) {
        this.isReady = true;
      }
      if (this.countdown > 0) {
        requestAnimationFrame(updateTimer);
      } else {
        this.isReady = false;
        this.countdown = 0;
      }
    }
    requestAnimationFrame(updateTimer);
  }

  fire() {

  }

}