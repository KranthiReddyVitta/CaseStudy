import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerCommunicationService {

  timerStamps = new BehaviorSubject(null);
  timerLast = new BehaviorSubject(null);
  currentTime = new BehaviorSubject(null);

  constructor() { }

  updateTimer(timers: any) {
    this.timerStamps.next(timers);
  }

  updateLast(val: any) {
    this.timerLast.next(val);
  }

  reset() {
    this.timerStamps.next(null);
    this.timerLast.next(null);
    this.currentTime.next(null);
  }
}
