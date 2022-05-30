import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TimerTypes } from 'src/app/constants/constants';
import { TimerCommunicationService } from '../../timer-communication.service';

const Started = "Started";
const Paused = "Paused";

@Component({
  selector: 'app-timer-count',
  templateUrl: './timer-count.component.html',
  styleUrls: ['./timer-count.component.scss'],
})
export class TimerCountComponent implements OnInit {
  start = 0;
  pause = 0;

  constructor(private timerCom: TimerCommunicationService, private meta:Meta) {}

  ngOnInit(): void {
    this.getTimeStamps();
    this.addTags();
  }

  addTags() {
    this.meta.addTag({
      name: 'description',
      content: 'Timer using subject',
    });
  }

  /**
   * @author kranthi kumar reddy
   * @method To filter timestamps
   * @memberof TimerCountComponent
   */

  getTimeStamps() {
    this.timerCom.timerStamps.subscribe((val: any) => {
      if (val) {
        this.start = val.filter(
          (val: any) => val.type == Started
        ).length;
        this.pause = val.filter((val: any) => val.type == Paused).length;
      }
    });
  }
}
