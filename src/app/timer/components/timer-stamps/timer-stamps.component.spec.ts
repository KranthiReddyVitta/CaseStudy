import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimerCommunicationService } from '../../timer-communication.service';

import { TimerStampsComponent } from './timer-stamps.component';

describe('TimerStampsComponent', () => {
  let component: TimerStampsComponent;
  let fixture: ComponentFixture<TimerStampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerStampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be empty array', () => {
    expect(component.stamps).toEqual([]);
  });

  it('should display stamps', () => {
    const service = fixture.debugElement.injector.get(
      TimerCommunicationService
    );
    service.timerStamps.next([{ type: 'Started', value: 100 },{ type: 'Paused', value: 50 }]);
    component.getTimeStamps();
    expect(component.stamps).toEqual([{ type: 'Started', value: 100 },{ type: 'Paused', value: 50 }]);
  });
});
