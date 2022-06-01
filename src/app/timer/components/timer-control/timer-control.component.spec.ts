import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TimerCommunicationService } from '../../timer-communication.service';

import { TimerControlComponent } from './timer-control.component';

describe('TimerControlComponent', () => {
  let component: TimerControlComponent;
  let fixture: ComponentFixture<TimerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerControlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call timerAction', fakeAsync(() => {
    spyOn(component, 'timerAction');
    let button = fixture.debugElement.nativeElement.querySelector('#start');
    button.click();
    tick();
    expect(component.timerAction).toHaveBeenCalled();
  }));

  it('should update text filed', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.nativeElement.querySelector('#input');
      input.nativeElement.value = 100;
      input.dispatchEvent(new Event('input'));
      expect(component.control.value).toEqual(100);
    });
  });

  it('should call reset', fakeAsync(() => {
    spyOn(component, 'reset');
    let button = fixture.debugElement.nativeElement.querySelector('#reset');
    button.click();
    tick();
    expect(component.reset).toHaveBeenCalled();
    fixture.detectChanges();
    expect(component.start).toEqual(false);
    expect(component.pausedTime).toEqual(null);
  }));

  it('should set values', fakeAsync(() => {
    component.reset();
    fixture.detectChanges();
    expect(component.start).toEqual(false);
    expect(component.pausedTime).toEqual(null);
  }));

  it('should call timerAction', () => {
    component.timerAction();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.nativeElement.querySelector('#input');
      input.nativeElement.value = 100;
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.start).toEqual(true);
    });
  });

  it('Should call managesubscriptions', () => {
    const service = fixture.debugElement.injector.get(
      TimerCommunicationService
    );
    service.currentTime.next(100);
    component.manageSubscriptions();
    expect(component.pausedTime).toEqual(100);
  });
});
