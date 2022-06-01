import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerCommunicationService {

  timerStamps = new BehaviorSubject<any>(null);
  timerLast = new BehaviorSubject<any>(null);
  currentTime = new BehaviorSubject<any>(null);

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
