import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-input-layout',
  templateUrl: './timer-input-layout.component.html',
  styleUrls: ['./timer-input-layout.component.scss']
})
export class TimerInputLayoutComponent implements OnInit {
  timers:any[] = [];
  lastTimer = null;
  constructor() { }

  ngOnInit() { }

  listenTimer(event: { timers: string | any[] }) {
    if (event && event.timers && event.timers.length) {
      this.timers = [...event.timers];
      this.lastTimer = this.timers[this.timers.length - 1];
    }
  }

}
