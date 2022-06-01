import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInputLayoutComponent } from './timer-input-layout.component';

describe('TimerInputLayoutComponent', () => {
  let component: TimerInputLayoutComponent;
  let fixture: ComponentFixture<TimerInputLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerInputLayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerInputLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listenTimer', () => {
    component.listenTimer({ timers: [{ type: 'Started', value: 100 }] });
    expect(component.timers).toEqual([{ type: 'Started', value: 100 }]);
    expect(component.lastTimer).toEqual({ type: 'Started', value: 100 });
  });

  it('should set current time' , () => {
    component.setCurrentTime(100);
    expect(component.currentTime).toEqual(100);
  })
});
