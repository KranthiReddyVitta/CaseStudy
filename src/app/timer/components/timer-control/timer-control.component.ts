import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TimerCommunicationService } from '../../timer-communication.service';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss'],
})
export class TimerControlComponent implements OnInit, OnDestroy {
  control = new FormControl('', Validators.required);
  actions: any[] = [];
  start = false;
  pausedTime = null;
  subscriptions: Subscription[] = [];
  pausedInterval: any[] = [];

  constructor(private timercom: TimerCommunicationService) {}

  ngOnInit(): void {
    this.manageSubscriptions();
  }

  /**
   *@author kranthi kumar reddy
   *@method Subscribe to current Time and paused time
   *@memberof TimerControlComponent
   */

  manageSubscriptions() {
    this.subscriptions.push(
      this.timercom.currentTime.subscribe((val) => {
        if (val || null) {
          this.pausedTime = val;
        }
      })
    );
    this.subscriptions.push(
      this.control.valueChanges.subscribe((val) => {
        if (val) {
          this.timercom.currentTime.next(null);
          this.pausedTime = null;
        }
      })
    );
  }

  /**
   *@author kranthi kumar reddy
   *@method To start/pause timer
   *@memberof TimerControlComponent
   */

  timerAction() {
    if (this.control.valid) {
      this.start = !this.start;
      const timer = {
        type: this.start ? 'Started' : 'Paused',
        value: this.pausedTime ? this.pausedTime : this.control.value,
        log: new Date(),
      };
      if (!this.start)
        this.pausedInterval.push({ type: 'Paused', value: this.pausedTime });
      this.actions.push(timer);
      this.timercom.updateTimer(this.actions);
      this.timercom.updateLast(this.actions[this.actions.length - 1]);
    }
  }

  /**
   *@author kranthi kumar reddy
   *@method To reset timer
   *@memberof TimerControlComponent
   */

  reset() {
    this.timercom.reset();
    this.start = false;
    this.pausedTime = null;
    this.actions = [];
    this.control.reset({ emitEvent: false });
  }

  /**
   *@author Kranthi Kumar Reddy
   *@method To unsubscribe observable subscriptions
   *@memberof TimerControlComponent
   */

  ngOnDestroy(): void {
    this.subscriptions.forEach((val) => val.unsubscribe());
  }
}
