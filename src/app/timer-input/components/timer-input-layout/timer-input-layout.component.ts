import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer-input-layout',
  templateUrl: './timer-input-layout.component.html',
  styleUrls: ['./timer-input-layout.component.scss']
})
export class TimerInputLayoutComponent implements OnInit, OnChanges {
  timers: any[] = [];
  lastTimer = null;
  currentTime: any = null;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit() { }

  listenTimer(event: { timers: string | any[] }) {
    if (event && event.timers && event.timers.length) {
      this.timers = [...event.timers];
      this.lastTimer = this.timers[this.timers.length - 1];
    }
  }

  setCurrentTime(val: any) {
    this.currentTime = val;
  }

}
