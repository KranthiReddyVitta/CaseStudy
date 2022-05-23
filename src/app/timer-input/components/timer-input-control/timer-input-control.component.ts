import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-input-control',
  templateUrl: './timer-input-control.component.html',
  styleUrls: ['./timer-input-control.component.scss'],
})
export class TimerInputControlComponent
  implements OnInit, OnChanges, OnDestroy
{
  control = new FormControl('', Validators.required);
  actions: any[] = [];
  start = false;
  pausedTime = null;
  @Output() timerEvent = new EventEmitter<any>();
  @Input() currentTime: any;
  subscriptions: Subscription[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.pausedTime = changes['currentTime'].currentValue;
  }

  ngOnInit() {
    this.subscriptions.push(
      this.control.valueChanges.subscribe((val) => {
        if (val) {
          this.pausedTime = null;
        }
      })
    );
  }



  /**
   * @author kranthi kumar reddy
   * @method To emit timer events
   * @memberof TimerInputControlComponent
   */
  timerAction() {
    if (this.control.valid) {
      this.start = !this.start;
      const timer = {
        type: this.start ? 'Started' : 'Paused',
        value: this.pausedTime ? this.pausedTime : this.control.value,
        log: new Date(),
      };
      this.actions.push(timer);
      this.timerEvent.emit({
        timers: this.actions,
      });
      //this.timercom.updateLast(this.actions[this.actions.length - 1]);
    }
  }



  /**
   * @author kranthi kumar reddy
   * @method To reset timer
   * @memberof TimerInputControlComponent
   */
  reset() {
    this.start = false;
    this.pausedTime = null;
    this.actions = [];
    this.control.reset({ emitEvent: false });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((val) => val.unsubscribe());
  }
}
