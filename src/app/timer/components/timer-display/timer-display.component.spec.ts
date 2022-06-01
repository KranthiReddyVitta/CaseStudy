import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { TimerCommunicationService } from '../../timer-communication.service';

import { TimerDisplayComponent } from './timer-display.component';

describe('TimerDisplayComponent', () => {
  let component: TimerDisplayComponent;
  let fixture: ComponentFixture<TimerDisplayComponent>;
  let span: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerDisplayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    span = fixture.nativeElement.querySelector('span');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display null', () => {
    expect(span.textContent).toEqual('');
  });

  it('should call get timer', () => {
    const service = fixture.debugElement.injector.get(
      TimerCommunicationService
    );
    service.timerLast.next({ type: 'Started', value: 100 });
    component.getTimer();
    expect(component.time).toEqual(100);
  });
 
  it('should clear timer', () => {
    const service = fixture.debugElement.injector.get(
      TimerCommunicationService
    );
    service.timerLast.next({ type: 'Paused', value: 0 });
    component.getTimer();
    expect(component.time).toEqual(0);
  });

});
