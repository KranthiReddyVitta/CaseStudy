import { Component, OnInit } from '@angular/core';
import { TimerCommunicationService } from '../../timer-communication.service';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss'],
})
export class TimerDisplayComponent implements OnInit {
  time: any = null;
  timerInterval: any;

  constructor(private timerCom: TimerCommunicationService) {}

  ngOnInit(): void {
    this.timerCom.timerLast.subscribe((val: any) => {
      if (val) {
        val.type == 'Started' ? this.setInterval(val) : this.clear(val);
      }
    });
  }

  /**
   * @author kranthi kumar reddy
   * @method To set coundown timer
   * @param {*} val
   * @memberof TimerDisplayComponent
   */
  setInterval(val: any) {
    this.time = val.value;
    this.timerInterval = setInterval(() => {
      if (this.time != 0) {
        this.time--;
        this.timerCom.currentTime.next(this.time);
      } else {
        this.clear(val, false);
      }
    }, 1000);
  }

  /**
   * @author kranthi kumar reddy
   * @method To reset timer
   * @param {*} val
   * @param {boolean} [bool=true]
   * @memberof TimerDisplayComponent
   */

  clear(val: any, bool = true) {
    console.log('Clear ', val);
    clearInterval(this.timerInterval);
    if (bool) this.time = val.value;
    this.timerCom.currentTime.next(this.time);
  }
}
