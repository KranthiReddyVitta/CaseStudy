import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-input-control',
  templateUrl: './timer-input-control.component.html',
  styleUrls: ['./timer-input-control.component.scss']
})
export class TimerInputControlComponent implements OnInit {

  control = new FormControl('', Validators.required);
  actions:any[] = [];
  start = false;
  pausedTime = null;
  @Output() timerEvent = new EventEmitter<any>();
  subscriptions: Subscription[] = [];

  constructor() {}

  ngOnInit() {
    this.subscriptions.push(
      this.control.valueChanges.subscribe((val) => {
        if (val) {
          this.pausedTime = null;
        }
      })
    );
  }

  timerAction() {
    if (this.control.valid) {
      this.start = !this.start;
      const timer = {
        type: this.start ? 'Started' : 'Paused',
        value: this.pausedTime ? this.pausedTime : this.control.value,
        log: new Date(),
      };
      this.actions.push(timer);
      this.timerEvent.emit({
        timers: this.actions,
      });
      //this.timercom.updateLast(this.actions[this.actions.length - 1]);
    }
  }

  reset() {
    this.start = false;
    this.pausedTime = null;
    this.actions = [];
    this.control.reset({ emitEvent: false });
  }

}
