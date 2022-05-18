import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-input-stamps',
  templateUrl: './timer-input-stamps.component.html',
  styleUrls: ['./timer-input-stamps.component.scss']
})
export class TimerInputStampsComponent implements OnInit {

  @Input() stamps: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
