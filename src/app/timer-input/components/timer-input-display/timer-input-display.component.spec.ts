import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInputDisplayComponent } from './timer-input-display.component';

describe('TimerInputDisplayComponent', () => {
  let component: TimerInputDisplayComponent;
  let fixture: ComponentFixture<TimerInputDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerInputDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerInputDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
