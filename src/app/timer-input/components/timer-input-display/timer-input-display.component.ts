import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-input-display',
  templateUrl: './timer-input-display.component.html',
  styleUrls: ['./timer-input-display.component.scss']
})
export class TimerInputDisplayComponent implements OnInit {

  @Input() set lastTimer(val: any) {
    if (val) {
      val.type == 'Started' ? this.setInterval(val) : this.clear(val);
    }
  }
  @Output() currentTime = new EventEmitter<any>();
  time: any = null;
  timerInterval: any;

  constructor() { }

  ngOnInit() {
  }

  setInterval(val: any) {
    this.time = val.value;
    this.timerInterval = setInterval(() => {
      if (this.time != 0) {
        this.time--;
        this.currentTime.emit(this.time);
      } else {
        this.clear(val, false);
      }
    }, 1000);
  }

  clear(val: any, bool = true) {
    console.log('Clear ', val);
    clearInterval(this.timerInterval);
    if (bool) this.time = val.value;
    this.currentTime.emit(this.time);
  }


}
