import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-input-display',
  templateUrl: './timer-input-display.component.html',
  styleUrls: ['./timer-input-display.component.scss']
})
export class TimerInputDisplayComponent implements OnInit {


  time = null;

  constructor() { }

  ngOnInit() {
  }

}
