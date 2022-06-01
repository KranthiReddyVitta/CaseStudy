import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInputDisplayComponent } from './timer-input-display.component';

describe('TimerInputDisplayComponent', () => {
  let component: TimerInputDisplayComponent;
  let fixture: ComponentFixture<TimerInputDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerInputDisplayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerInputDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display timer'),
    () => {
      const component = fixture.componentInstance;
      (component.lastTimer = { type: 'Started', val: 100 }),
        fixture.detectChanges();
      component.setInterval(component.lastTimer);
      expect(component.time).toEqual(100);
    };

  it('Should clear timer'),
    () => {
      const component = fixture.componentInstance;
      (component.lastTimer = { type: 'Pause', val: 50 }),
        fixture.detectChanges();
      expect(component.time).toEqual(50);
      expect(component.timerInterval).toEqual(null);
    };

  it('Should display start/pause'),
    () => {
      spyOnProperty(
        component.lastTimer({ type: 'Started', value: 100 }),
        'set'
      ).and.callThrough();
      fixture.detectChanges();
      expect(component.time).toEqual(100);
    };

  it('should emit event', () => {
    spyOn(component.currentTime, 'emit');
    component.clear({ type: 'Started', value: 100 }, true);
    fixture.detectChanges();
    expect(component.time).toEqual(100);
    expect(component.currentTime.emit).toHaveBeenCalled();
  });
});
