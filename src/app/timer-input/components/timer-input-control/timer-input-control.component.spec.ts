import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInputControlComponent } from './timer-input-control.component';

describe('TimerInputControlComponent', () => {
  let component: TimerInputControlComponent;
  let fixture: ComponentFixture<TimerInputControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerInputControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
