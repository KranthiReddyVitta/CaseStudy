import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-input-count',
  templateUrl: './timer-input-count.component.html',
  styleUrls: ['./timer-input-count.component.scss']
})
export class TimerInputCountComponent implements OnInit {

  start = 0;
  pause = 0;

  @Input() set stamps(val:any) {
    if (val && val.length) {
      this.filterCount(val);
    }
  }
  constructor() {}

  ngOnInit() {}

  filterCount(val:any) {
    this.start = val.filter((val:any) => val.type == 'Started').length;
    this.pause = val.filter((val:any) => val.type == 'Paused').length;
  }

}
