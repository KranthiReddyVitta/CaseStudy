import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInputStampsComponent } from './timer-input-stamps.component';

describe('TimerInputStampsComponent', () => {
  let component: TimerInputStampsComponent;
  let fixture: ComponentFixture<TimerInputStampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerInputStampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerInputStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
