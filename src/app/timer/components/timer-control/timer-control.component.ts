import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TimerCommunicationService } from '../../timer-communication.service';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss']
})
export class TimerControlComponent implements OnInit, OnDestroy {

  control = new FormControl('', Validators.required);
  actions: any[] = [];
  start = false;
  pausedTime = null;
  subscriptions: Subscription[] = [];

  constructor(private timercom: TimerCommunicationService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.timercom.currentTime.subscribe((val) => {
        if (val || null) {
          console.log('control null', val);
          this.pausedTime = val;
        }
      })
    );
    this.subscriptions.push(
      this.control.valueChanges.subscribe((val) => {
        if (val) {
          console.log('val', val);
          this.timercom.currentTime.next(null);
          this.pausedTime = null;
        }
      })
    );
  }

  timerAction() {
    if (this.control.valid) {
      console.log('timer action', this.control.value);
      this.start = !this.start;
      console.log('After', this.pausedTime);
      const timer = {
        type: this.start ? 'Started' : 'Paused',
        value: this.pausedTime ? this.pausedTime : this.control.value,
        log: new Date(),
      };
      this.actions.push(timer);
      this.timercom.updateTimer(this.actions);
      this.timercom.updateLast(this.actions[this.actions.length - 1]);
    }
  }

  reset() {
    this.timercom.reset();
    this.start = false;
    this.pausedTime = null;
    this.actions = [];
    this.control.reset({ emitEvent: false });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((val) => val.unsubscribe());
  }

}
