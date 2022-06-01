import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimerCommunicationService } from '../../timer-communication.service';

import { TimerCountComponent } from './timer-count.component';

describe('TimerCountComponent', () => {
  let component: TimerCountComponent;
  let fixture: ComponentFixture<TimerCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initial start value') , () => {
    expect(component.start).toEqual(0);
  }

  it('initial pause value') , () => {
    expect(component.pause).toEqual(0);
  }

  it('should clear timer', () => {
    const service = fixture.debugElement.injector.get(
      TimerCommunicationService
    );
    service.timerStamps.next([{ type: 'Started', value: 100 },{ type: 'Paused', value: 50 }]);
    component.getTimeStamps();
    expect(component.start).toEqual(1);
    expect(component.pause).toEqual(1);
  });
});
