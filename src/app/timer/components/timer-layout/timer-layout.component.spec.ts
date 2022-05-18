import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLayoutComponent } from './timer-layout.component';

describe('TimerLayoutComponent', () => {
  let component: TimerLayoutComponent;
  let fixture: ComponentFixture<TimerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
