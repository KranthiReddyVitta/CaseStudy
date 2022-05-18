import { Component, OnInit } from '@angular/core';
import { TimerCommunicationService } from '../../timer-communication.service';

@Component({
  selector: 'app-timer-count',
  templateUrl: './timer-count.component.html',
  styleUrls: ['./timer-count.component.scss']
})
export class TimerCountComponent implements OnInit {

  start = 0;
  pause = 0;

  constructor(private timerCom: TimerCommunicationService) { }

  ngOnInit(): void {
    this.getTimeStamps();
  }

  getTimeStamps() {
    this.timerCom.timerStamps.subscribe((val: any) => {
      if (val) {
        this.start = val.filter((val: any) => val.type == 'Started').length;
        this.pause = val.filter((val: any) => val.type == 'Paused').length;
      }
    });
  }

}
