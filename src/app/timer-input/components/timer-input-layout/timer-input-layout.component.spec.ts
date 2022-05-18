import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInputLayoutComponent } from './timer-input-layout.component';

describe('TimerInputLayoutComponent', () => {
  let component: TimerInputLayoutComponent;
  let fixture: ComponentFixture<TimerInputLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerInputLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerInputLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
