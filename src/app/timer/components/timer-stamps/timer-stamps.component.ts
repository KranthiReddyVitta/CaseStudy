import { Component, OnInit } from '@angular/core';
import { TimerCommunicationService } from '../../timer-communication.service';

@Component({
  selector: 'app-timer-stamps',
  templateUrl: './timer-stamps.component.html',
  styleUrls: ['./timer-stamps.component.scss']
})
export class TimerStampsComponent implements OnInit {

  stamps: any = [];

  constructor(private timerCom: TimerCommunicationService) { }

  ngOnInit(): void {
    this.getTimeStamps();
  }

  getTimeStamps() {
    this.timerCom.timerStamps.subscribe((val) => {
      if (val) {
        this.stamps = val;
      }
    });
  }

}
